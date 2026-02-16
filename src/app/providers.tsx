'use client';

import { Provider } from './components/ui/provider';
import Fonts from './components/fonts';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <Fonts />
      {children}
    </Provider>
  );
}