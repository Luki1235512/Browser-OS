import { config, PROMPT_CHARACTER } from "components/apps/Terminal/config";
import { autoComplete } from "components/apps/Terminal/functions";
import type {
  FitAddon,
  LocalEcho,
  OnKeyEvent,
} from "components/apps/Terminal/types";
import useCommandInterpreter from "components/apps/Terminal/useCommandInterpreter";
import extensions from "components/system/Files/FileEntry/extensions";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import useResizeObserver from "hooks/useResizeObserver";
import { extname } from "path";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { HOME, PACKAGE_DATA, PREVENT_SCROLL } from "utils/constants";
import { haltEvent, isFirefox, loadFiles } from "utils/functions";
import type { IDisposable, Terminal } from "xterm";

const { alias, author, license, version } = PACKAGE_DATA;

export const displayLicense = `${license} License`;

export const displayVersion = (): string => {
  const { __NEXT_DATA__: { buildId } = {} } = window;

  return `${version}${buildId ? `-${buildId}` : ""}`;
};

const useTerminal = (
  id: string,
  url: string,
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loading: boolean
): void => {
  const {
    url: setUrl,
    processes: { [id]: { closing = false, libs = [] } = {} },
  } = useProcesses();
  const cd = useRef(url || HOME);
  const { readdir } = useFileSystem();
  const [terminal, setTerminal] = useState<Terminal>();
  const [fitAddon, setFitAddon] = useState<FitAddon>();
  const [localEcho, setLocalEcho] = useState<LocalEcho>();
  const [initialCommand, setInitialCommand] = useState("");
  const [prompted, setPrompted] = useState(false);
  const processCommand = useCommandInterpreter(id, cd, terminal, localEcho);
  const autoFit = useCallback(() => fitAddon?.fit(), [fitAddon]);
  const { foregroundId } = useSession();

  useEffect(() => {
    if (url) {
      if (localEcho) {
        localEcho.handleCursorInsert(url);
      } else {
        const fileExtension = extname(url).toLowerCase();
        const { command: extCommand = "" } = extensions[fileExtension] || {};

        if (extCommand) setInitialCommand(`${extCommand} ${url}`);
      }

      setUrl(id, "");
    }
  }, [id, localEcho, setUrl, url]);

  useEffect(() => {
    loadFiles(libs).then(() => {
      if (window.Terminal) setTerminal(new window.Terminal(config));
    });
  }, [libs]);

  useEffect(() => {
    if (
      terminal &&
      loading &&
      containerRef.current &&
      window.FitAddon &&
      window.LocalEchoController
    ) {
      const newFitAddon = new window.FitAddon.FitAddon();
      const newLocalEcho = new window.LocalEchoController(undefined, {
        historySize: 1000,
      });

      terminal.loadAddon(newLocalEcho);
      terminal.loadAddon(newFitAddon);
      terminal.open(containerRef.current);
      newFitAddon.fit();

      setFitAddon(newFitAddon);
      setLocalEcho(newLocalEcho);

      containerRef.current.addEventListener("contextmenu", (event) => {
        haltEvent(event);

        const textSelection = terminal.getSelection();

        if (textSelection) {
          navigator.clipboard?.writeText(textSelection);
          terminal.clearSelection();
        } else {
          navigator.clipboard
            ?.readText?.()
            .then((clipboardText) =>
              newLocalEcho.handleCursorInsert(clipboardText)
            );
        }
      });
      containerRef.current
        ?.closest("section")
        ?.addEventListener(
          "focus",
          () => terminal?.textarea?.focus(PREVENT_SCROLL),
          { passive: true }
        );

      setLoading(false);

      if (isFirefox()) terminal.options.letterSpacing = 0;
    }

    return () => {
      if (terminal && closing) terminal.dispose();
    };
  }, [closing, containerRef, loading, setLoading, terminal]);

  useEffect(() => {
    let currentOnKey: IDisposable;

    if (terminal && localEcho) {
      terminal.textarea?.setAttribute("enterkeyhint", "send");
      currentOnKey = terminal.onKey(
        ({ domEvent: { ctrlKey, code } }: OnKeyEvent) => {
          if (ctrlKey && code === "KeyV") {
            navigator.clipboard
              ?.readText?.()
              .then((clipboardText) =>
                localEcho.handleCursorInsert(clipboardText)
              );
          }
        }
      );
    }

    return () => currentOnKey?.dispose();
  }, [localEcho, terminal]);

  useEffect(() => {
    if (localEcho && terminal && !prompted) {
      const prompt = (): Promise<void> =>
        localEcho
          .read(`\r\n${cd.current}${PROMPT_CHARACTER}`)
          .then((command) => processCommand.current?.(command).then(prompt));

      localEcho.println(`${alias} [Version ${displayVersion()}]`);
      localEcho.println(`By ${author.name}. ${displayLicense}.`);

      if (initialCommand) {
        localEcho.println(
          `\r\n${cd.current}${PROMPT_CHARACTER}${initialCommand}\r\n`
        );
        localEcho.history.entries = [initialCommand];
        processCommand.current(initialCommand).then(prompt);
      } else {
        prompt();
      }

      setPrompted(true);
      terminal.focus();
      autoFit();

      readdir(cd.current).then((files) => autoComplete(files, localEcho));
    }
  }, [
    autoFit,
    initialCommand,
    localEcho,
    processCommand,
    prompted,
    readdir,
    terminal,
  ]);

  useLayoutEffect(() => {
    if (id === foregroundId && !loading) {
      terminal?.textarea?.focus(PREVENT_SCROLL);
    }
  }, [foregroundId, id, loading, terminal]);

  useResizeObserver(containerRef.current, autoFit);
};

export default useTerminal;
