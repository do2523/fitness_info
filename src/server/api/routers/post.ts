import { z } from "zod";
import { env } from "note/env";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "note/server/api/trpc";
import { posts } from "note/server/db/schema";

type Exercise = {
  equipment: string;
}
export const exerciseRouter = createTRPCRouter({
  getExercises: publicProcedure
    .input(z.object({
      muscle: z.string(), // Validate muscle input as a string
    }))
    .query(async ({ input }) => {
      const apiKey = env.APIKEY;
      const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${input.muscle}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          'X-Api-Key': apiKey,
        },
      });

      const data: Exercise[] = await response.json();

      return data;
    }),
});

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
