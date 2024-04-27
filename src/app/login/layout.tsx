import { LayoutProps } from "@/types/app.types";
import React from "react";

const LoginLayout = (props: LayoutProps) => {
  return <>{props.children}</>;
};

export default LoginLayout;
