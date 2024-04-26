import { LayoutProps } from "@/types/app";
import React from "react";

const LoginLayout = (props: LayoutProps) => {
  return <div>{props.children}</div>;
};

export default LoginLayout;
