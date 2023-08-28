/* eslint-disable @next/next/no-sync-scripts */
'use client';
import type { Metadata } from 'next';
import Header from 'src/components/molecules/header';
import GlobalStyle from '../styles/globals';

// export const metadata: Metadata = {
//   title: 'Music News',
//   description: '박영재 바보',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body>
        {/* <script src="https://genius.codes"></script> */}
        <GlobalStyle />
        <Header />
        {children}
      </body>
    </html>
  );
}
