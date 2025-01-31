import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = (props: Props) => {
  //get automation data
  return (
    <div className=" rounded-full w-full p-5 shadow-transparent bg-[#3333371a] flex items-center">
      <div className=" flex items-center min-w-0 gap-x-3">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight className=" flex-shrink-0" color="#9B9CA0" />
        <span className=" flex gap-x-3 items-center min-w-0">
          {/**show editing data */}
          <p className=" text-[#9B9CA0] truncate">This is automation title</p>
          <span className=" cursor-pointer hover:opacity-75 duration-100 flex-shrink-0 transition">
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className=" flex items-center ml-auto gap-x-5">
        <p className="hidden md:block truncate min-w-0 text-text-secondary/60 text-sm">
          All posts are automatically saved
        </p>
        <div className=" flex-shrink-0 flex gap-x-5">
          <p className=" text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton id="jfs" />
    </div>
  );
};

export default AutomationBreadCrumb;
