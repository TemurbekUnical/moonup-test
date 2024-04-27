import { SVGProps } from "react";

const Icons = {
  Error,
  Logout,
};

export default Icons;

function Error() {
  return <>❌</>;
}

function Logout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <path
        fill="#B1B1B8"
        d="M10 16a1 1 0 0 1 1-1h9V8.5c0-2-2.112-3.5-4-3.5H6.5A3.504 3.504 0 0 0 3 8.5v15A3.504 3.504 0 0 0 6.5 27h10a3.504 3.504 0 0 0 3.5-3.5V17h-9a1 1 0 0 1-1-1ZM28.707 15.293l-5-5a1 1 0 0 0-1.414 1.414L25.586 15H20v2h5.586l-3.293 3.293a1.003 1.003 0 0 0-.018 1.432 1 1 0 0 0 1.432-.018l5-5a1 1 0 0 0 0-1.414Z"
      />
    </svg>
  );
}
