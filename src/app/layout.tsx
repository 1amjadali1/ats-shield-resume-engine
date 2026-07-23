import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATS-Shield | Beat the Applicant Tracking System",
  description: "AI-powered resume optimization engine to guarantee ATS compliance and land more interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30`}>
        <Navbar />
        <main className="flex-1 flex flex-col mt-16 relative">
          {/* Subtle background glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />
          {children}
        </main>
      </body>
    </html>
  );
}
