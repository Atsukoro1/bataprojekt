import { bumpGameSessionSchema, createGameSessionSchema } from "../schemas/gameSessionSchema";
import { bumpGameSessionService, createGameSessionService, getGameSessionService } from "../services/gameSession";
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

    fetchSession: protectedProcedure
        .query(({ ctx }) => {
            return getGameSessionService(ctx);
        })
});