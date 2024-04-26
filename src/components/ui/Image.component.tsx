import { ArgumentType } from "@/types";
import NextImage from "next/image";

const Image = (props: ArgumentType<typeof NextImage>) => {
  return (
    <>
      <NextImage {...props} />
    </>
  );
};

export default Image;
