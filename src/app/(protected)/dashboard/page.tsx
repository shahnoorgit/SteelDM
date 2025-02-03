import { onBoardUser } from "@/actions/user";
import React from "react";

const Page = async () => {
  const user = await onBoardUser();
  return <div>{user?.data.firstName}</div>;
};

export default Page;
