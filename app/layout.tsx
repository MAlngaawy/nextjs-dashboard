import { Analytics } from '@vercel/analytics/react';
import '@/app/ui/global.css';
import { inter, spaceMono } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} antialiased`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
