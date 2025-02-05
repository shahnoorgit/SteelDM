"use server";

import { onCurrentUser } from "../user";
import { createAutomations } from "./queries";

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomations(user.id);
    if (create) return { status: 200, data: "Automations Created" };
    return { status: 404, data: "Opps something went wrong" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal server error" };
  }
};
