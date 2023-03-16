import { PawIcon } from 'components/system/Icons';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <PawIcon />
  </StyledStartButton>
);

export default StartButton;
