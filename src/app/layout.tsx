"use client";
import { isLoggedIn } from "@/services/auth";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  if (isLoggedIn()) {
    router.replace("/main");
  } else {
    router.replace("/login");
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-left" />
        {children}
      </body>
    </html>
  );
}
