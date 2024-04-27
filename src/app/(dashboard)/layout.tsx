import DashboardNavbar from "@/components/shared/navbar";
import { LayoutProps } from "@/types/app.types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <DashboardNavbar />
      <div className="container w-main m-auto">{children}</div>
    </div>
  );
};

export default Layout;
