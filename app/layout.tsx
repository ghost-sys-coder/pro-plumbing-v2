import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WhatsAppFAB } from "@/components/ui/whatsapp-fab";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PlumbMaster Technical Atelier | Precision Plumbing Engineering",
    template: "%s | PlumbMaster Technical Atelier",
  },
  description:
    "Precision plumbing engineering meets master craftsmanship. We deliver sophisticated infrastructure solutions for residential and commercial systems with surgical accuracy. Serving the tri-state area since 1994.",
  keywords: [
    "plumbing",
    "master plumber",
    "residential plumbing",
    "commercial plumbing",
    "emergency plumbing",
    "plumbing engineering",
    "water systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-350 mx-auto overflow-hidden">{children}</main>
          <Footer />
          <ThemeSwitcher />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
