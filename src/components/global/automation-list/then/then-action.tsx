import { useListener } from "@/hooks/useAutomations";
import React from "react";
import TriggerButton from "../trigger/trigger-button";
import { AUTOMATION_LISTENERS } from "@/constants/automation";
import SubscriptionPlan from "../../subscription-plan";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "../../loader";

type Props = {
  id: string;
};

const ThenComponent = ({ id }: Props) => {
  const {
    isPending,
    onsetListener,
    listener: Listener,
    register,
    onFormSubmit,
  } = useListener(id);

  return (
    <TriggerButton label={"when"}>
      <div className=" flex flex-col gap-y-2">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === "SMARTAI" ? (
            <SubscriptionPlan key={listener.id} type="PRO">
              <div
                onClick={() => onsetListener(listener.type)}
                className={cn(
                  "p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100",
                  Listener === listener.type
                    ? "bg-gradient-to-br from-[#3352CC] to-[#1C2D70]"
                    : "bg-background-80"
                )}
              >
                <div className=" gap-x-2 items-center flex">
                  {listener.icon}
                  <p>{listener.label}</p>
                </div>
                <p>{listener.description}</p>
              </div>
            </SubscriptionPlan>
          ) : (
            <div
              onClick={() => onsetListener(listener.type)}
              className={cn(
                "p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100",
                Listener === listener.type
                  ? "bg-gradient-to-br from-[#3352CC] to-[#1C2D70]"
                  : "bg-background-80"
              )}
            >
              <div className=" gap-x-2 items-center flex">
                {listener.icon}
                <p>{listener.label}</p>
              </div>
              <p>{listener.description}</p>
            </div>
          )
        )}
        <form className="flex flex-col gap-2" onSubmit={onFormSubmit}>
          <Textarea
            className=" bg-background-80 outline-none border-none ring-0 focus:ring-0"
            placeholder={
              Listener === "SMARTAI"
                ? "Add a prompt that smartAI can use"
                : "Add message you want to send your customers"
            }
            {...register("prompt")}
          />
          <Input
            {...register("reply")}
            className=" bg-background-80 outline-none border-none ring-0 focus:ring-0"
            placeholder="Add reply for comments (Optional)"
          />
          <Button className=" bg-gradient-to-br w-full text-white from-[#3352CC] font-medium to-[#1C2D70]">
            <Loader state={isPending}>Add Listener</Loader>
          </Button>
        </form>
      </div>
    </TriggerButton>
  );
};

export default ThenComponent;
