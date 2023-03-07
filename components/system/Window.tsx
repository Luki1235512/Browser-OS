import type { FC } from 'react';
import StyledWindow from 'styles/components/system/StyledWindow';

interface WindowProps {
  children: React.ReactNode;
}

const Window: FC<WindowProps> = ({ children }) => <StyledWindow>{children}</StyledWindow>;

export default Window;
