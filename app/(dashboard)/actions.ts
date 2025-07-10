"use server";

import { z } from "zod";
import { db } from "@/lib/db/drizzle";
import { content } from "@/lib/db/schema";
import { redirect } from "next/navigation";
import { getUserWithTeam } from "@/lib/db/queries";
import { validatedActionWithUser } from "@/lib/auth/middleware";

const createContentSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
});

export const createContent = validatedActionWithUser(
  createContentSchema,
  async (data, _, user) => {
    const userWithTeam = await getUserWithTeam(user.id);

    if (!userWithTeam?.teamId) {
      return { error: "User is not part of a team" };
    }

    const [newContent] = await db
      .insert(content)
      .values({
        teamId: userWithTeam.teamId,
        title: data.title,
        content: "",
        createdBy: user.id,
      })
      .returning();

    if (!newContent?.id) {
      return { error: "Failed to create content" };
    }

    redirect(`/editor/${newContent.id}`);
  }
);
