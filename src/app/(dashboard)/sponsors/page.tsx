"use client";
import Table from "@/components/ui/table";
import { useRequest } from "@/services/api";
import { Column, ListResponse } from "@/types/common.types";
import dateFormat from "@/utils/dateFormat";
import moneyFormat from "@/utils/moneyFormat";
import React from "react";

const Sponsors = () => {
  const { data } = useRequest<ListResponse<ISponsor>>({
    url: "/sponsor-list/",
    method: "GET",
  });
  return (
    <div>
      <div className="pt-10">
        <Table columns={columns} data={data?.data.results} />
      </div>
    </div>
  );
};

export default Sponsors;
const columns: Column<ISponsor>[] = [
  {
    title: "#",
    render(_, order) {
      return order;
    },
    className: "w-8",
  },
  {
    title: "F.I.SH.",
    render(row) {
      return row.full_name;
    },
  },
  {
    title: "Tel.Raqami",
    render(row) {
      return row.phone;
    },
  },
  {
    title: "Homiylik summasi",
    render(row) {
      return moneyFormat(row.sum);
    },
  },
  {
    title: "Sarflangan summa",
    render(row) {
      return moneyFormat(row.spent);
    },
  },
  {
    title: "Sana",
    render(row) {
      return <>{dateFormat(row.created_at)}</>;
    },
  },
  {
    title: "Status",
    render(row) {
      return row.get_status_display;
    },
  },
  {
    title: "Holat",
    render(row) {
      return "view";
    },
  },
];
