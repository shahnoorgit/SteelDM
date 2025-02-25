import React from "react";
import PopOver from "../../popover/pop-over";
import { BlueAddIcon } from "@/icons";

type Props = {
  label: string;
  children: React.ReactNode;
};

const TriggerButton = ({ label, children }: Props) => {
  return (
    <PopOver
      className="w-full"
      trigger={
        <div className=" border-2 border-dashed w-full border-[#3352CC] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5">
          <BlueAddIcon />
          <p className=" font-bold text-[#768BDD]">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
};

export default TriggerButton;
