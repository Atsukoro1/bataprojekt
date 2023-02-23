import { z } from "zod";
import { bumpGameSessionSchema, createGameSessionSchema, dumpGameSessionSchema } from "../schemas/gameSessionSchema";
import { bumpGameSessionService, createGameSessionService, dumpGameSessionService, getGameSessionService, removeGameSessionService } from "../services/gameSession";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const gameSessionRouter = createTRPCRouter({
    createSession: protectedProcedure
        .output(createGameSessionSchema.output)
        .mutation(async ({ ctx }) => {
            return createGameSessionService(ctx);
        }),

    bumpStage: protectedProcedure
        .output(bumpGameSessionSchema.output)
        .mutation(async ({ ctx }) => {
            return bumpGameSessionService(ctx);
        }),

    dumpStage: protectedProcedure
        .output(dumpGameSessionSchema.output)
        .mutation(async ({ ctx }) => {
            return dumpGameSessionService(ctx);
        }),

    removeSession: protectedProcedure
        .output(z.boolean())
        .mutation(({ ctx }) => {
            return removeGameSessionService(ctx);
        }),

    fetchSession: protectedProcedure
        .query(({ ctx }) => {
            return getGameSessionService(ctx);
        })
});