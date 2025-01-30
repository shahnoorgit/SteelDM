"use client";
import React from "react";
import { usePath } from "@/hooks/use-nav";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "./upgrade";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();
  return (
    <div
      className=" w-[260px] shadow-sm shadow-[#AABBFF] border-[1px] radial fixed left-0 lg:inline-block  border-[#545454]  bg-gradient-to-b from-[#768BDD] via-[#171717]
    to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden"
    >
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur_safari backdrop-blur-3xl">
        <div className=" flex gap-x-2 items-center justify-center p-5">
          <span className=" font-extrabold text-3xl text-[#AABBFF]">
            SteelDM
          </span>
        </div>
        <div className=" flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-4">
          <Separator orientation="horizontal" className=" bg-[#5c5c5f]" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className=" flex gap-x-2">
            <ClerkAuthState />
            <p className=" text-[#9B9CA0]">Profile</p>
          </div>
          <div className=" flex gap-x-3">
            <HelpDuoToneWhite />
            <p className=" text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className=" flex flex-1 flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
