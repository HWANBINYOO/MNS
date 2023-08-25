'use client';
import type { Metadata } from 'next';
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
    <html lang="ko">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
