import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <FontAwesomeIcon icon={faPaw} />
  </StyledStartButton>
);

export default StartButton;
