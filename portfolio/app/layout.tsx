import type { Metadata } from "next";
import { Geist, Geist_Mono, Courgette } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courgette = Courgette({ 
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-courgette'
});

export const metadata: Metadata = {
  title: "Vaindrum",
  description: "I am Vaibhav Raj, a full stack developer and oss enthusiast. Building web applications, web interfaces and learning over time. Just a  student who enjoys tech.",
  keywords: ["vaindrum", "Vaindrum", "Vaibhav Raj", "vaibhav raj", "vaibhav portfolio", "vaindrum portfolio", "vaindrum nextjs", "Vaibhav Raj", "Vaindrum portfolio", "Vaindrum nextjs", "Vaibhav Raj portfolio", "Vaibhav Raj nextjs"],
  authors: [{ name: "Vaibhav Raj", url: "https://github.com/vaindrum" }],
  icons: {
    icon: "/favicon2.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon2.ico",
  },
  openGraph: {
    title: "Vaibhav Raj",
    description: "Full stack developer and oss enthusiast.",
    url: "https://vaindrum-me.vercel.app",
    siteName: "Vaibhav Raj || vaindrum",
    images: [
      {
        url: "https://vaindrum-me.vercel.app/apple-icon.png",
      },
    ],
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courgette.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
