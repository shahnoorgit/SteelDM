import AutomationBreadCrumb from "@/components/global/bread-crumbs/automations";
import { Warning } from "@/icons";
import React from "react";
import Trigger from "@/components/global/automations/trigger";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { prefetchUserAutomation } from "@/react-query/prefetch";
import { getAllAutomationInfo } from "@/actions/automations";

//Meta setting
export async function GenerateMetaData({ params }: { params: { id: string } }) {
  const info = await getAllAutomationInfo(params.id);
  return {
    title: info.data?.name,
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const query = new QueryClient();
  await prefetchUserAutomation(query, params.id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-20">
        <AutomationBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col gap-y-3 bg-[#1d1d1d]">
          <div className="flex gap-x-2">
            <Warning />
            when...
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
