import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import useIFrameFocuser from "utils/useIFrameFocuser";
import useUrlLoader from "utils/useUrlLoader";

const Index = (): React.ReactElement => {
  useIFrameFocuser();
  useUrlLoader();

  // TODO: Lock document title on load
  // useEffect(lockTitle, []);

  return (
    <Desktop>
      <Taskbar />
      <AppsLoader />
    </Desktop>
  );
};

export default Index;
