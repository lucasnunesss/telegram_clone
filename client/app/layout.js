import { icons } from "lucide-react";
import "./globals.css";
import {Space_Grotesk} from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  weight: ['300','400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-spaceGrotesk'
})

export const metadata = {
  title: "Telegram web",
  description: "Telegram web application clone",
  icons: {icon: "/logo.svg"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
