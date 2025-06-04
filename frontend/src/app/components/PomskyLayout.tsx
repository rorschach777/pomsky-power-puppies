'use client';

import PomskyProvider from '../store/pomsky-context-provider';

export default function PomskyLayout({ children }: { children: React.ReactNode }) {
  return <PomskyProvider>{children}</PomskyProvider>;
}