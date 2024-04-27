import React, { Fragment } from "react";
import Pagination from "./pagination";
import { Column, TableData } from "@/types/common.types";
import className from "@/utils/className";

interface Props<T extends TableData> {
  columns: Column<T>[];
  data?: T[];
}

function Table<T extends TableData>({ columns, data }: Props<T>) {
  return (
    <div>
      <div>
        <Main columns={columns} data={data} />
      </div>
      <div className="flex justify-end pt-8">
        <Pagination />
      </div>
    </div>
  );
}

const Main = <T extends TableData>({ columns, data }: Props<T>) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-400 uppercase">
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col" className="font-semibold px-6 py-3">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, rowIndex) => (
          <Fragment key={item.id}>
            <tr
              className={className({
                "bg-white rounded-3xl": true,
              })}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={className({
                    "px-4 py-6 font-medium text-gray-900 whitespace-nowrap":
                      true,
                    [column.className || ""]: column.className,
                  })}
                >
                  {column.render(item, rowIndex + 1)}
                </td>
              ))}
            </tr>
            <br />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
