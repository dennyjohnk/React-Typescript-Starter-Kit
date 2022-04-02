import { extendTheme } from '@chakra-ui/react';
import { ThemeConfig } from '@chakra-ui/theme';

import { colors } from './colors';
import { components } from './components';
import { styles } from './style';

export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const fonts = {
  body: 'Avenir Next, sans-serif',
  heading: 'Avenir Next, sans-serif',
  html: 'Avenir Next, sans-serif',
  mono: 'Avenir Next, monospace',
};

export const theme = extendTheme({ config, colors, components, fonts, styles });
