import type { FSModule } from "browserfs/dist/node/core/FS";
import {
  globals,
  saveExtension,
  zipConfigFiles,
} from "components/apps/JSDOS/config";
import { addFileToZip, isFileInZip } from "components/apps/JSDOS/zipFunctions";
import useTitle from "components/system/Window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import type { CommandInterface } from "emulators";
import type { DosInstance } from "emulators-ui/dist/types/js-dos";
import { basename, join } from "path";
import { useEffect, useState } from "react";
import { EMPTY_BUFFER, SAVE_PATH } from "utils/constants";
import { bufferToUrl, cleanUpBufferUrl, cleanUpGlobals } from "utils/functions";

const addJsDosConfig = async (buffer: Buffer, fs: FSModule): Promise<Buffer> =>
  Object.entries(zipConfigFiles).reduce(
    async (newBuffer, [zipPath, fsPath]) =>
      (await isFileInZip(await newBuffer, zipPath))
        ? newBuffer
        : addFileToZip(await newBuffer, fsPath, zipPath, fs),
    Promise.resolve(buffer)
  );

const useDosCI = (
  id: string,
  url: string,
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  dosInstance?: DosInstance
): CommandInterface | undefined => {
  const { appendFileToTitle } = useTitle(id);
  const { fs, mkdirRecursive, updateFolder } = useFileSystem();
  const {
    linkElement,
    processes: { [id]: { closing = false } = {} },
  } = useProcesses();
  const [dosCI, setDosCI] = useState<Record<string, CommandInterface>>({});

  useEffect(() => {
    const closeBundle = (bundleUrl: string, closeInstance = false): void => {
      dosCI[bundleUrl]?.persist().then((saveZip) =>
        mkdirRecursive(SAVE_PATH, () => {
          const saveName = `${basename(bundleUrl)}${saveExtension}`;

          fs?.writeFile(join(SAVE_PATH, saveName), Buffer.from(saveZip), () => {
            if (closeInstance) dosInstance?.stop();
            updateFolder(SAVE_PATH, saveName);
          });
        })
      );
    };

    if (dosInstance && fs && url && !dosCI[url]) {
      fs.readFile(url, async (_urlError, urlContents = EMPTY_BUFFER) => {
        const bundleURL = bufferToUrl(await addJsDosConfig(urlContents, fs));

        fs.readFile(
          join(SAVE_PATH, `${basename(url)}${saveExtension}`),
          (saveError, saveContents = EMPTY_BUFFER) => {
            const [currentUrl] = Object.keys(dosCI);
            let optionalChangesUrl = "";

            if (!saveError) {
              optionalChangesUrl = bufferToUrl(saveContents);
            }

            if (currentUrl) closeBundle(currentUrl);

            dosInstance.run(bundleURL, optionalChangesUrl).then((ci) => {
              const canvas = containerRef.current?.querySelector("canvas");

              if (canvas instanceof HTMLCanvasElement) {
                linkElement(id, "peekElement", canvas);
                setDosCI({ [url]: ci });
                appendFileToTitle(url);
                cleanUpBufferUrl(bundleURL);
                if (optionalChangesUrl) cleanUpBufferUrl(optionalChangesUrl);
                cleanUpGlobals(globals);
              }
            });
          }
        );
      });
    }
    return () => {
      if (closing) closeBundle(url, closing);
    };
  }, [
    appendFileToTitle,
    closing,
    containerRef,
    dosCI,
    dosInstance,
    fs,
    id,
    linkElement,
    mkdirRecursive,
    updateFolder,
    url,
  ]);

  return dosCI[url];
};

export default useDosCI;
