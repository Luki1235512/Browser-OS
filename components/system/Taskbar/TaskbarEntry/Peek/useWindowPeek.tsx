import PeekWindow from "components/system/Taskbar/TaskbarEntry/Peek/PeekWindow";
import { useProcesses } from "contexts/process";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  MILLISECONDS_IN_SECOND,
  ONE_TIME_PASSIVE_EVENT,
} from "utils/constants";

type WindowPeek = {
  hidePeek: () => void;
  PeekComponent?: React.ComponentType;
  peekEvents: {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  };
};

const renderFrame = (
  previewElement: HTMLElement,
  callback: (url: string) => void
): void => {
  import("html-to-image").then(({ toCanvas }) =>
    toCanvas(previewElement).then((canvas) => {
      const { height, width } = canvas;
      const { data: pixelData } =
        canvas.getContext("2d")?.getImageData(0, 0, width, height) || {};

      if (pixelData?.some(Boolean)) {
        const dataUrl = canvas.toDataURL();
        const previewImage = new Image();

        previewImage.src = dataUrl;
        previewImage.addEventListener(
          "load",
          () => callback(dataUrl),
          ONE_TIME_PASSIVE_EVENT
        );
      } else {
        renderFrame(previewElement, callback);
      }
    })
  );
};

const useWindowPeek = (id: string): WindowPeek => {
  const {
    processes: { [id]: process },
  } = useProcesses();
  const { closing, componentWindow, peekElement } = process || {};
  const mouseTimer = useRef<NodeJS.Timer>();
  const previewTimer = useRef<NodeJS.Timer>();
  const [showPeek, setShowPeek] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");
  const hidePeek = () => setShowPeek(false);
  const onMouseEnter = () => {
    const previewElement = peekElement || componentWindow;

    if (!mouseTimer.current && !previewTimer.current && previewElement) {
      const render = () => renderFrame(previewElement, setPreviewSrc);

      mouseTimer.current = setTimeout(() => {
        render();
        setShowPeek(true);
        previewTimer.current = setInterval(render, MILLISECONDS_IN_SECOND);
      }, MILLISECONDS_IN_SECOND / 2);
    }
  };
  const onMouseLeave = useCallback(() => {
    if (mouseTimer?.current) clearTimeout(mouseTimer.current);
    if (previewTimer?.current) clearInterval(previewTimer.current);

    mouseTimer.current = undefined;
    previewTimer.current = undefined;

    setShowPeek(false);
    setPreviewSrc("");
  }, []);

  useEffect(() => onMouseLeave, [onMouseLeave]);

  return {
    hidePeek,
    PeekComponent:
      showPeek && previewSrc && !closing
        ? () => <PeekWindow id={id} image={previewSrc} />
        : undefined,
    peekEvents: {
      onMouseEnter,
      onMouseLeave,
    },
  };
};

export default useWindowPeek;
