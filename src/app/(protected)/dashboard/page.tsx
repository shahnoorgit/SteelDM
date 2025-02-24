import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await onBoardUser();
  if (user?.status == 200 || user?.status === 201) {
    return redirect(`/dashboard/${user?.data?.userName}`);
  }
  return <div>{user?.data.userName}</div>;
};

export default Page;
