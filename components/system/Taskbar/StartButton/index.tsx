import PawIcon from "components/system/Taskbar/StartButton/PawIcon";
import StyledStartButton from "components/system/Taskbar/StartButton/StyledStartButton";

type StartButtonProps = {
  startMenuVisible: boolean;
  toggleStartMenu: (showMenu?: boolean) => void;
};

const StartButton = ({
  startMenuVisible,
  toggleStartMenu,
}: StartButtonProps): JSX.Element => (
  <StyledStartButton
    active={startMenuVisible}
    title="Start"
    onClick={() => toggleStartMenu()}
  >
    <PawIcon />
  </StyledStartButton>
);

export default StartButton;
