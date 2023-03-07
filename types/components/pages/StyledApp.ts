import type React from 'react';
import type { DefaultTheme } from 'styled-components';

export type StyledAppProps = {
  children: React.ReactNode;
  theme?: DefaultTheme;
};
