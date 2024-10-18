'use client';

import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Navbar />
      <main>{children}</main>
    </SessionProvider>
  );
}
