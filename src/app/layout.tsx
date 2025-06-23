import type { Metadata } from 'next';
import './globals.css';

// Using system font stack from globals.css

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Created with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
