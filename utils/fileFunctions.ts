import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';

type Shortcut = {
  BaseURL: string;
  IconFile: string;
  URL: string;
};

export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (error, contents = Buffer.from('')) => {
      if (error) {
        reject(error);
      } else {
        const { InternetShortcut = { BaseURL: '', IconFile: '', URL: '' } } =
          ini.parse(contents.toString());

        resolve(InternetShortcut as Shortcut);
      }
    });
  });

export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    default:
      return '/icons/unknown.ico';
  }
};

export const getProcessByFileExtension = (_extension: string): string => '';
