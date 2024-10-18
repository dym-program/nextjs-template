import './globals.css'; 
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js App Router Template',
  description: 'A template for Next.js with App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl">Next.js App Router Template</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 Next.js App Router Template</p>
        </footer>
      </body>
    </html>
  );
}
