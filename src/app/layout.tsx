import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBotDemo from "@/components/AIAssistant";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Metadata will automatically apply <title>, <meta>, and favicon
export const metadata: Metadata = {
  title: "GreenPledge – Reforesting India",
  description: "An initiative to reforest India using an interactive deforestation tracking dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <ChatBotDemo />
      </body>
    </html>
  );
}
