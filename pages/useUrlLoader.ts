import { useProcesses } from "contexts/process";
import { useEffect } from "react";

const useUrlLoader = (): void => {
  const { open } = useProcesses();

  useEffect(() => {
    const serachParams = new URLSearchParams(window.location.search);
    const app = serachParams.get("app");
    const url = serachParams.get("url");

    if (app && url) open(app, url);
  }, [open]);
};

export default useUrlLoader;
