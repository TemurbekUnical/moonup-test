"use client";
import Table from "@/components/ui/table";
import { useRequest } from "@/services/api";
import { Column, ListResponse } from "@/types/common.types";
import { IStudent } from "@/types/student.types";
import moneyFormat from "@/utils/moneyFormat";

const Students = () => {
  const { data } = useRequest<ListResponse<IStudent>>({
    method: "GET",
    url: "/student-list/",
  });
  return (
    <div className="pt-10">
      <Table columns={columns} data={data?.data.results} />
    </div>
  );
};

export default Students;

const columns: Column<IStudent>[] = [
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
    title: "OTM",
    render(row) {
      return row.institute.name;
    },
  },
  {
    title: "Tel.Raqami",
    render(row) {
      return row.phone;
    },
  },
  {
    title: "Ajratilingan summa",
    render(row) {
      return moneyFormat(row.given);
    },
  },
  {
    title: "Kontrakt miqdori",
    render(row) {
      return moneyFormat(row.contract);
    },
  },
];
