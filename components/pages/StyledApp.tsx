import { SessionConsumer } from 'contexts/session';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes.json';

interface StyledAppProps {
  children: React.ReactNode;
}

const StyledApp: FC<StyledAppProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = themes.default }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
