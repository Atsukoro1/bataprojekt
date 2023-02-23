import { bumpGameSessionSchema, createGameSessionSchema, dumpGameSessionSchema } from "../schemas/gameSessionSchema";
import { bumpGameSessionService, createGameSessionService, dumpGameSessionService, getGameSessionService } from "../services/gameSession";
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

    fetchSession: protectedProcedure
        .query(({ ctx }) => {
            return getGameSessionService(ctx);
        })
});