"use server";

import { currentUser } from "@clerk/nextjs/server";
import { onCurrentUser } from "../user";
import {
  createAutomation,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: "Automations Created" };
    return { status: 404, data: "Opps something went wrong" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal server error" };
  }
};

export const getAllAutomations = async () => {
  const user = await currentUser();
  try {
    const automations = await getAutomations(user?.id);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 404, data: [] };
  } catch (error) {
    console.log(error);
    return { status: 500, data: [] };
  }
};

export const getAllAutomationInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };
    return { status: 404 };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: { name?: string; automation?: string; active?: boolean }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);
    if (update) {
      return { status: 200, data: "Automation Data updated succesfully!" };
    }
    return { status: 404, data: "Opps data not found" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "internal server error" };
  }
};
