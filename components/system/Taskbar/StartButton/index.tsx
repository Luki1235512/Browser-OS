import PawIcon from "components/system/Taskbar/StartButton/PawIcon";
import StyledStartButton from "components/system/Taskbar/StartButton/StyledStartButton";
import { useSession } from "contexts/session";

const StartButton = (): JSX.Element => {
  const { startMenuVisible, toggleStartMenu } = useSession();

  return (
    <StyledStartButton
      active={startMenuVisible}
      title="Start"
      onClick={() => toggleStartMenu()}
    >
      <PawIcon />
    </StyledStartButton>
  );
};

export default StartButton;
