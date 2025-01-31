import AutomationBreadCrumb from "@/components/global/bread-crumbs/automations";
import React from "react";

type Props = {
  params: { id: string };
};

//Meta setting

const Page = ({ params }: Props) => {
  //prefetch user automation
  return (
    <div className=" flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={params.id} />
    </div>
  );
};

export default Page;
