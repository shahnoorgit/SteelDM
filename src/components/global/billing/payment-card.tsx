import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

const PaymentCard = ({ label, current, landing }: Props) => {
  return <div className={cn(label !== current)}>PaymentCard</div>;
};

export default PaymentCard;
