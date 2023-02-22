import { bumpGameSessionSchema, createGameSessionSchema } from "../schemas/gameSessionSchema";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { prisma } from "@/server/db";

export const gameSessionRouter = createTRPCRouter({
    createSession: protectedProcedure
        .input(createGameSessionSchema.output)
        .mutation(async ({ ctx }) => {
            const found = await prisma.gameSession.findFirst({
                where: {
                    userId: ctx.session.user.id
                }
            });

            if(found) {
                return {
                    success: false,
                    errorMessage: "Již máte založenou hru"
                }
            }

            await prisma.gameSession.create({
                data: {
                    userId: ctx.session.user.id,
                }
            });

            return {
                success: true
            };
        }),

    bumpStage: protectedProcedure
        .output(bumpGameSessionSchema.output)
        .mutation(async ({ ctx }) => {
            const found = await prisma.gameSession.findFirst({
                where: {
                    userId: ctx.session.user.id
                }
            });

            if(!found) {
                return {
                    success: false,
                    errorMessage: "Tento GameSession neexistuje"
                }
            };

            if(found.stage === 10) {
                return {
                    success: false,
                    errorMessage: "Již jste hru dokončili"
                }
            };

            const updated = await prisma.gameSession.update({
                where: {
                    userId: ctx.session.user.id
                },
                data: {
                    stage: {
                        increment: 1
                    }
                }
            });

            return {
                success: true,
                data: updated.stage
            };
        })
});