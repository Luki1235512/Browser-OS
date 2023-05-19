import { basename, dirname, extname, join } from "path";
import type React from "react";
import { ONE_TIME_PASSIVE_EVENT } from "utils/constants";

const sortCaseInsesitive = (a: string, b: string) =>
  a.localeCompare(b, "en", { sensitivity: "base" });

export const sortContents = (contents: string[]): string[] => {
  const files: string[] = [];
  const folders: string[] = [];

  contents.forEach((entry) => {
    if (extname(entry)) {
      files.push(entry);
    } else {
      folders.push(entry);
    }
  });

  return [
    ...folders.sort(sortCaseInsesitive),
    ...files.sort(sortCaseInsesitive),
  ];
};

export const iterateFileName = (path: string, iteration: number): string => {
  const extension = extname(path);
  const fileName = basename(path, extension);

  return join(dirname(path), `${fileName} (${iteration})${extension}`);
};

export const haltEvent = (event: Event | React.DragEvent): void => {
  event.preventDefault();
  event.stopPropagation();
};

export const handleFileInputEvent = (
  event: Event | React.DragEvent,
  callback: (fileName: string, fileBuffer: Buffer) => void
): void => {
  haltEvent(event);

  const eventTarget =
    (event as React.DragEvent)?.dataTransfer ||
    (event?.currentTarget as HTMLInputElement);
  const eventFiles = eventTarget?.files || [];

  if (eventFiles.length > 0) {
    [...eventFiles].forEach((file) => {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        ({ target }) => {
          if (target?.result instanceof ArrayBuffer) {
            callback(file.name, Buffer.from(new Uint8Array(target?.result)));
          }
        },
        ONE_TIME_PASSIVE_EVENT
      );
      reader.readAsArrayBuffer(file);
    });
  }
};
