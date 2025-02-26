"use client";
import { useQueryAutomation } from "@/hooks/user.queries";
import React from "react";
import ActiveTrigger from "../../automation-list/trigger";
import { Separator } from "@/components/ui/separator";
import ThenComponent from "../../automation-list/then/then-action";
import TriggerButton from "../../automation-list/trigger/trigger-button";
import { AUTOMATION_TRIGGERS } from "@/constants/automation";
import { useTriggers } from "@/hooks/useAutomations";
import { cn } from "@/lib/utils";
import KeyWords from "../../automation-list/trigger/keywords";

type Props = {
  id: string;
};

const Trigger = ({ id }: Props) => {
  const { types, onSaveTrigger, onSetTrigger, isPending } = useTriggers(id);
  const data = useQueryAutomation(id);
  if (data?.data?.data && data.data.data?.trigger.length > 0) {
    return (
      <div className="flex flex-col gap-y-6 items-center">
        <ActiveTrigger
          type={data.data.data.trigger[0].type}
          keywords={data.data.data.keywords}
        />

        {data?.data?.data.trigger.length > 1 && (
          <>
            <div className=" relative w-6/12 mt-4">
              <p className=" absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-2 left-1/2">
                or
              </p>
              <Separator
                orientation="horizontal"
                className=" border-muted border-[1px]"
              />
            </div>

            <ActiveTrigger
              type={data.data.data.trigger[0].type}
              keywords={data.data.data.keywords}
            />
          </>
        )}
        {data?.data?.data.listener && <ThenComponent id={id} />}
      </div>
    );
  }
  return (
    <TriggerButton label="Add Trigger">
      <div className=" flex flex-col gap-y-2">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            className={cn(
              "hover:opacity-80 min-w-96 text-white rounded-xl flex cursor-pointer flex-col p-3 gap-y-2",
              !types?.find((type) => type === trigger.type)
                ? " bg-background-80"
                : " bg-gradient-to-br from-[#3352CC] to-[#1C2D70]"
            )}
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
          >
            <div className=" flex gap-x-2 items-center">
              {trigger.icon}
              <p>{trigger.label}</p>
            </div>
            <p>{trigger.description}</p>
          </div>
        ))}
        <KeyWords id={id} />
      </div>
    </TriggerButton>
  );
};

export default Trigger;
