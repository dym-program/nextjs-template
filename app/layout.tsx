'use client';

import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Next.js Template',
  description: 'A template project with MongoDB, Redis, and Social Authentication.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
