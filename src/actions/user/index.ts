"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refresTokenInsta } from "@/lib/fetch";
import { updateIntegrations } from "../integrations/queries";

export const onCurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();
  console.log(user);

  try {
    const found = await findUser(user.id);

    if (found) {
      if (found.integrations.length > 0) {
        const integration = found.integrations[0];

        // Check if expiresAt exists and calculate time left
        if (integration.expiresAt) {
          const today = new Date();
          const time_left = integration.expiresAt.getTime() - today.getTime();
          const days = Math.round(time_left / (1000 * 3600 * 24));

          // Refresh token if it's about to expire (less than 5 days left)
          if (days < 5) {
            console.log("refresh");
            const refresh = await refresTokenInsta(integration.token);
            const today = new Date();
            const expire_date = today.setDate(today.getDate() + 60);

            await updateIntegrations(
              refresh.access_token,
              new Date(expire_date),
              integration.id
            );
          }
        }
      }

      // Return user data if user exists
      return {
        status: 200,
        data: {
          userName: found.userName,
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }

    // Create user only if not found
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.username!,
      user.emailAddresses[0].emailAddress
    );
    return { status: 201, data: created };
  } catch (error) {
    console.log(error);
    return { status: 500, data: { message: "internal server error" } };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) {
      return { status: 200, data: profile };
    }
    return { status: 404 };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};
