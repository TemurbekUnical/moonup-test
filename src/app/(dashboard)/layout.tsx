"use client";
import { isLoggedIn } from "@/services/auth";
import { LayoutProps } from "@/types/app";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    router.replace("/login");
  }
  return <>{children}</>;
};

export default Layout;
