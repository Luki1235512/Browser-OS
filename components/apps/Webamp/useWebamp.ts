import {
  closeEqualizer,
  getWebampElement,
  updateWebampPosition
} from 'components/apps/Webamp/functions';
import type { WebampCI } from 'components/apps/Webamp/types';
import { useProcesses } from 'contexts/process';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { bufferToUrl, cleanUpBufferUrl } from 'utils/functions';

type Webamp = {
  loadWebamp: (containerElement: HTMLDivElement | null, file?: Buffer) => void;
};

const useWebamp = (id: string): Webamp => {
  const { close, minimize } = useProcesses();
  const {
    setWindowStates,
    windowStates: { [id]: { position = undefined } = {} } = {}
  } = useSession();
  const {
    sizes: {
      taskbar: { height: taskbarHeight }
    }
  } = useTheme();

  const loadWebamp = useCallback(
    (containerElement: HTMLDivElement | null, file?: Buffer): void => {
      if (containerElement) {
        const options: any = { zIndex: 1 };

        if (file) {
          options.initialTracks = [
            {
              metaData: {
                artist: '',
                title: ''
              },
              url: bufferToUrl(file)
            }
          ];
        }

        const webamp: WebampCI = new window.Webamp(options);

        webamp.onClose(() => {
          const [main] = getWebampElement().getElementsByClassName('window');
          const { x, y } = main.getBoundingClientRect();

          close(id);
          setWindowStates((currentWindowStates) => ({
            ...currentWindowStates,
            [id]: {
              position: { x, y }
            }
          }));

          if (options.initialTracks) {
            const [{ url: objectUrl }] = options.initialTracks;

            cleanUpBufferUrl(objectUrl);
          }
        });
        webamp.onMinimize(() => minimize(id));
        webamp.renderWhenReady(containerElement).then(() => {
          closeEqualizer(webamp);
          updateWebampPosition(webamp, taskbarHeight, position);
          containerElement.appendChild(getWebampElement());
        });
      }
    },
    [close, id, minimize, position, setWindowStates, taskbarHeight]
  );

  return {
    loadWebamp
  };
};

export default useWebamp;
