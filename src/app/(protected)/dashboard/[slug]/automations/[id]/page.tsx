import AutomationBreadCrumb from "@/components/global/bread-crumbs/automations";
import { Warning } from "@/icons";
import React from "react";
import Trigger from "@/components/global/automations/trigger";
type Props = {
  params: { id: string };
};

//Meta setting

const Page = ({ params }: Props) => {
  //prefetch user automation
  return (
    <div className=" flex flex-col items-center gap-y-20">
      <AutomationBreadCrumb id={params.id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col gap-y-3 bg-[#1d1d1d]">
        <div className=" flex gap-x-2">
          <Warning />
          when...
        </div>
        <Trigger id={params.id} />
      </div>
    </div>
  );
};

export default Page;
