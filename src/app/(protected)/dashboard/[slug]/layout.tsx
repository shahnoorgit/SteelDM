import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  //query

  return (
    <div className=" p-3 ">
      <Sidebar slug={params.slug} />
      {children}
    </div>
  );
};

export default Layout;
