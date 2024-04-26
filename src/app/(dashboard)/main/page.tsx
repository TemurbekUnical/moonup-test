"use client";
import { useRequest } from "@/services/api";
import { PageProps } from "@/types/app";
import { GetDashboard } from "@/types/main";

const DashboardMain = (props: PageProps) => {
  const { data } = useRequest<GetDashboard>({
    url: "/dashboard/",
    method: "GET",
  });

  return (
    <div className="flex justify-center">
      <div className="container w-[1200px]">
        <h1>Dashboard</h1>
        <div className="grid grid-cols-3 gap-5 justify-between">
          <div className="rounded-xl bg-white p-5 flex gap-3 justify-between">
            <span className="size-12 flex justify-center items-center bg-opacity-15 bg-main-blue rounded-2xl">
              ico
            </span>
            <div className="flex-1">
              <p>Jami to`langan summa</p>
              <h3 className="font-bold text-xl">
                {data?.data.total_must_pay}{" "}
                <span className="text-gray-500">UZS</span>
              </h3>
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 flex gap-3 justify-between">
            <span className="size-12 flex justify-center items-center bg-opacity-15 bg-main-blue rounded-2xl">
              ico
            </span>
            <div className="flex-1">
              <p>Jami to`langan summa</p>
              <h3 className="font-bold text-xl">
                {data?.data.total_need}{" "}
                <span className="text-gray-500">UZS</span>
              </h3>
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 flex gap-3 justify-between">
            <span className="size-12 flex justify-center items-center bg-opacity-15 bg-main-blue rounded-2xl">
              ico
            </span>
            <div className="flex-1">
              <p>Jami to`langan summa</p>
              <h3 className="font-bold text-xl">
                {data?.data.total_paid}{" "}
                <span className="text-gray-500">UZS</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardMain.getInitialProps = async () => {};

export default DashboardMain;
