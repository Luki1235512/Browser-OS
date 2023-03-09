import StyledDesktop from 'styles/components/system/StyledDesktop';

const Desktop: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
