// src/app/(protected)/dashboard/[slug]/layout.tsx
import ClientLayout from "./clientLayout";

type LayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};

export default function LayoutWrapper({ children, params }: LayoutProps) {
  const { slug } = params;
  return <ClientLayout slug={slug}>{children}</ClientLayout>;
}
