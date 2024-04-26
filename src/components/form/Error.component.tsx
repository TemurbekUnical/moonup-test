import Icons from "@/assets/svgs";
import React, { memo } from "react";

const Error: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="text-error text-14 italic mt-2 flex items-center gap-1">
      <Icons.Error />
      {children}
    </p>
  );
};

export default memo(Error);
