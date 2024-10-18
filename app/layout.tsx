import RootLayout from '../components/RootLayout';

export const metadata = {
  title: 'Next.js Template',
  description: 'A template project with MongoDB, Redis, and Social Authentication.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
