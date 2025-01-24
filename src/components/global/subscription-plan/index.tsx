import React from "react";

type Props = {
  children: React.ReactNode;
  type: "FREE" | "PRO";
};

const SubscriptionPlan = ({ children, type }: Props) => {
  console.log(type);

  //wip Return subscription
  return children;
};

export default SubscriptionPlan;
