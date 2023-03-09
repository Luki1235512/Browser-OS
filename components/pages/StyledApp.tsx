import { SessionConsumer } from 'contexts/session';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';
import type { StyledAppProps } from 'types/components/pages/StyledApp';

const StyledApp: FC<StyledAppProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ themeName }) => (
        <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
          {children}
        </ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
