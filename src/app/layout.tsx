import type { Metadata } from 'next';
import './globals.css';
import { GoogleTagManager } from '@/shared/components/GoogleTagManager';
import { GoogleTagManagerNoScript } from '@/shared/components/GoogleTagManagerNoScript';
import { ReactQueryProvider } from '@/shared/providers/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouteAnalytics } from '@/shared/providers/RouteAnalytics';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'ReserveIQ – Property Managers',
  description:
    'AI-powered portfolio intelligence that gives you the oversight boards expect —and the edge over your competitors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <ReactQueryProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <RouteAnalytics />
          </Suspense>
          {children}
          <ToastContainer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
