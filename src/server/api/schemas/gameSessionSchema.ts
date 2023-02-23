import { z } from "zod";

export const createGameSessionSchema = {
    output: z.object({
        success: z
            .boolean(),
        errorMessage: z
            .string()
            .optional()
    })
}

export type CreateGameSessionSchemaOutput = typeof createGameSessionSchema.output._input;

export const bumpGameSessionSchema = {
    output: z.object({
        success: z
            .boolean(),
        stage: z.number(),
        finished: z.boolean(),
        errorMessage: z
            .string()
            .optional()
    })
}

export type BumpGameSessionSchemaOutput = typeof bumpGameSessionSchema.output._input;

export const dumpGameSessionSchema = {
    output: z.object({
        success: z
            .boolean(),
        stage: z
            .number(),
        errorMessage: z
            .string()
            .optional()
    })
}

export type DumpGameSessionSchemaOutput = typeof dumpGameSessionSchema.output._input;