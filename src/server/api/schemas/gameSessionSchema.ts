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

export const bumpGameSessionSchema = {
    output: z.object({
        success: z
            .boolean(),
        data: z
            .number()
            .optional(),
        errorMessage: z
            .string()
            .optional()
    })
}