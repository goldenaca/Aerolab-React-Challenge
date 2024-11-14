import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/ui/fonts";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Aerolab challenge",
  description: "This is a challenge from Aerolab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${inter.className} antialiased max-w-screen-md p-4 m-auto bg-white`}
        >
          <div className="custom-background w-[100vw] absolute top-0 h-[275px] animate-bounce-slow  -z-10 right-0" />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
