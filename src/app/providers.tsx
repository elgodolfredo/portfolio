'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Fonts from './components/fonts';
import theme from './lib/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}