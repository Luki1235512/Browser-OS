import { extname } from "path";

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
