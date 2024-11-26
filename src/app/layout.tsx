import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'devstore',
  description: 'store for devs',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
