'use client';

import * as React from 'react';

import { RootProvider } from 'fumadocs-ui/provider';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Readonly<Props>) {
  return <RootProvider>{children}</RootProvider>;
}
