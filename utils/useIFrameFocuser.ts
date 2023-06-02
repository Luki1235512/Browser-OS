import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { useCallback, useEffect } from "react";
import { ONE_TIME_PASSIVE_EVENT } from "utils/constants";

const useIFrameFocuser = (): void => {
  const { processes } = useProcesses();
  const { setForegroundId } = useSession();
  const focusIFrameWindow = useCallback((): void => {
    if (document.activeElement instanceof HTMLIFrameElement) {
      const [id] =
        Object.entries(processes).find(([, { componentWindow }]) =>
          componentWindow?.contains(document.activeElement)
        ) || [];

      if (id) {
        setForegroundId(id);
        window.addEventListener(
          "click",
          ({ target }) => {
            const [focusId = ""] =
              Object.entries(processes).find(
                ([, { componentWindow }]) =>
                  target instanceof HTMLElement &&
                  componentWindow?.contains(target)
              ) || [];

            setForegroundId(focusId);
          },
          ONE_TIME_PASSIVE_EVENT
        );
      }
    }
  }, [processes, setForegroundId]);

  useEffect(() => {
    window.addEventListener("blur", focusIFrameWindow, { passive: true });

    return () => window.removeEventListener("blur", focusIFrameWindow);
  }, [focusIFrameWindow]);
};

export default useIFrameFocuser;
