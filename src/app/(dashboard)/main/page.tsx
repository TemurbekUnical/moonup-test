"use client";
import DashboardCard from "@/components/ui/DashboardCard.component";
import { useRequest } from "@/services/api";
import { PageProps } from "@/types/app.types";
import { GetDashboard } from "@/types/main-dashboard.types";

const DashboardMain = (props: PageProps) => {
  const { data } = useRequest<GetDashboard>({
    url: "/dashboard/",
    method: "GET",
  });

  return (
    <div className="flex justify-center pt-10">
      <div className="container w-main">
        {data?.data && (
          <div className="grid grid-cols-3 gap-7 justify-between">
            <DashboardCard
              price={data?.data.total_must_pay}
              title="Jami to`langan summa"
            />
            <DashboardCard
              price={data?.data.total_need}
              title="Jami to`langan summa"
            />
            <DashboardCard
              price={data?.data.total_paid}
              title="Jami to`langan summa"
            />
          </div>
        )}
      </div>
    </div>
  );
};

DashboardMain.getInitialProps = async () => {};

export default DashboardMain;
