import { Session } from "next-auth"
import { BumpGameSessionSchemaOutput, CreateGameSessionSchemaOutput } from "../schemas/gameSessionSchema"
import { prisma } from "@/server/db";

export const createGameSessionService = async (
    { session }: { session: Session | null }
): Promise<CreateGameSessionSchemaOutput> => {
    const found = await prisma.gameSession.findFirst({
        where: {
            userId: session?.user.id
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
            userId: session?.user.id || "",
        }
    });

    return {
        success: true
    };
}

export const bumpGameSessionService = async (
    { session }: { session: Session | null }
): Promise<BumpGameSessionSchemaOutput> => {
    const found = await prisma.gameSession.findFirst({
        where: {
            userId: session?.user.id
        }
    });

    if(!found) {
        return {
            success: false,
            finished: false,
            stage: 0,
            errorMessage: "Tento GameSession neexistuje"
        }
    };

    if(found.stage === 10) {
        await prisma.gameSession.delete({
            where: {
                userId: session?.user.id
            }
        });

        await prisma.score.create({
            data: {
                userId: session?.user.id || "",
                time: Date.now() - found.started.getTime()
            }
        });

        return {
            success: true,
            finished: true,
            stage: 10
        }
    };

    const updated = await prisma.gameSession.update({
        where: {
            userId: session?.user.id
        },
        data: {
            stage: {
                increment: 1
            }
        }
    });

    return {
        success: false,
        finished: false,
        stage: updated.stage
    }
}