import { libs } from "components/apps/TinyMCE/config";
import { setReadOnlyMode } from "components/apps/TinyMCE/functions";
import useTitle from "components/system/Window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { basename, extname } from "path";
import { config } from "process";
import { useEffect, useState } from "react";
import type { Editor } from "tinymce";
import { EMPTY_BUFFER } from "utils/constants";
import { loadFiles } from "utils/functions";

const useTinyMCE = (
  id: string,
  url: string,
  containerRef: React.MutableRefObject<HTMLDivElement | null>
): void => {
  const [editor, setEditor] = useState<Editor>();
  const { appendFileToTitle } = useTitle(id);
  const { fs } = useFileSystem();

  useEffect(() => {
    loadFiles(libs).then(() => {
      if (containerRef.current) {
        window.tinymce.init({
          selector: `.${[...containerRef.current.classList].join(".")} div`,
          setup: (activeEditor: Editor) =>
            activeEditor.on("load", () => setEditor(activeEditor)),
          ...config,
        });
      }
    });
  }, [containerRef]);

  useEffect(() => {
    if (url && editor) {
      fs?.readFile(url, (error, contents = EMPTY_BUFFER) => {
        if (!error) {
          if (contents.length > 0) setReadOnlyMode(editor);
          editor.setContent(contents.toString());
          appendFileToTitle(basename(url, extname(url)));
        }
      });
    }

    return () => editor?.destroy();
  }, [appendFileToTitle, editor, fs, url]);
};

export default useTinyMCE;
