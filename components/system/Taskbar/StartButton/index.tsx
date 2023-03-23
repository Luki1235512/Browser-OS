import { PawIcon } from 'components/system/Icons';
import StyledStartButton from 'components/system/Taskbar/StartButton/StyledStartButton';

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <PawIcon />
  </StyledStartButton>
);

export default StartButton;
