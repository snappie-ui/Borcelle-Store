import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Borcelle Store",
  description: "Borcelle Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-3 sm:gap-4 h-16 bg-white border-b shadow-sm">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm sm:text-base rounded-full border border-[#6c47ff] text-[#6c47ff] hover:bg-[#6c47ff] hover:text-white transition duration-200">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm sm:text-base rounded-full bg-[#6c47ff] text-white hover:bg-[#5536cc] transition duration-200">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
