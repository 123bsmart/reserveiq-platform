import type { Metadata } from 'next';
import './globals.css';
import { GoogleTagManager } from '@/shared/components/GoogleTagManager';
import { GoogleTagManagerNoScript } from '@/shared/components/GoogleTagManagerNoScript';
import { ReactQueryProvider } from '@/shared/providers/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouteAnalytics } from '@/shared/providers/RouteAnalytics';
// Using system font stack from globals.css

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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </head>
      <body>
        <GoogleTagManagerNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        <ReactQueryProvider>
          <RouteAnalytics />
          {children}
        </ReactQueryProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
