import type { FC } from 'react';
import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
