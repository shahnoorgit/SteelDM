import { useQueryUser } from "@/hooks/user.queries";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "FREE" | "PRO";
};

const SubscriptionPlan = ({ children, type }: Props) => {
  console.log(type);

  const { data } = useQueryUser();
  return data?.data?.subscription?.plan === type && children;
};

export default SubscriptionPlan;
