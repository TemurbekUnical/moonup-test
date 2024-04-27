import z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});
export type ILoginForm = z.infer<typeof LoginSchema>;
export interface PostLogin {
  refresh: string;
  access: string;
}
