export interface PageProps {
  params: Record<string, string>;
  searchParams: { [key: string]: string | string[] | undefined };
}
export interface LayoutProps {
  children: React.ReactNode;
  params: Record<string, string>;
}
