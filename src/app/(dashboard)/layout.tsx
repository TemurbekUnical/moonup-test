"use client";
import DashboardNavbar from "@/components/shared/navbar";
import { isLoggedIn } from "@/services/auth";
import { LayoutProps } from "@/types/app.types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login");
    }
  }, []);

  return (
    <div>
      <DashboardNavbar />
      <div className="container w-main m-auto">{children}</div>
    </div>
  );
};

export default Layout;
