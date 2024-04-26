"use client";
import InputForm, {
  MainInputTypes,
} from "@/components/form/InputForm.component";
import Button from "@/components/ui/Button.component";
import Image from "@/components/ui/Image.component";
import { useRequest } from "@/services/api";
import { ILoginForm, LoginSchema, PostLogin } from "@/types/login";
import browserStorage from "@/utils/browserStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();

  const { handleSubmit, control } = useForm<ILoginForm>({
    resolver: zodResolver(LoginSchema),
  });
  const { request, isPending } = useRequest<PostLogin, ILoginForm>(
    {},
    {
      onSuccess(data) {
        browserStorage.set("user", data);
        router.replace("/main");
      },
    }
  );
  const submit = handleSubmit((form: ILoginForm) => {
    request({
      method: "post",
      data: form,
      url: "/auth/login/",
    });
  });

  return (
    <div className="flex justify-center items-center gap-10 flex-col text-black h-screen">
      <Image width={315} height={33} src={"/imgs/metsenat.png"} alt="logo" />
      <form
        onSubmit={submit}
        className="bg-white w-[380px] rounded-xl border-[#EBEEFC] p-8 space-y-6 "
      >
        <h1 className="text-2xl font-semibold mb-4  ">Kirish</h1>
        <InputForm control={control} label="Login" name="username" />
        <InputForm
          control={control}
          label="Parol"
          name="password"
          type={MainInputTypes.PASSWORD}
        />
        <Button isPending={isPending}>Kirish</Button>
      </form>
    </div>
  );
};

export default Page;
