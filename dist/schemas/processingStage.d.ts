import { z } from 'zod';
export declare const createProcessingStageSchema: z.ZodObject<{
    processingBatchId: z.ZodNumber;
    previousStageId: z.ZodOptional<z.ZodNumber>;
    processMethod: z.ZodEnum<["wet", "dry"]>;
    dateOfProcessing: z.ZodEffects<z.ZodString, Date, string>;
    doneBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    processMethod: "wet" | "dry";
    dateOfProcessing: Date;
    doneBy: string;
    processingBatchId: number;
    previousStageId?: number | undefined;
}, {
    processMethod: "wet" | "dry";
    dateOfProcessing: string;
    doneBy: string;
    processingBatchId: number;
    previousStageId?: number | undefined;
}>;
export type CreateProcessingStageInput = z.infer<typeof createProcessingStageSchema>;
export declare const finalizeProcessingStageSchema: z.ZodObject<{
    dateOfCompletion: z.ZodEffects<z.ZodString, Date, string>;
    quantityAfterProcess: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    dateOfCompletion: Date;
    quantityAfterProcess: number;
}, {
    dateOfCompletion: string;
    quantityAfterProcess: number;
}>;
export type FinalizeProcessingStageInput = z.infer<typeof finalizeProcessingStageSchema>;
export declare const createDryingEntrySchema: z.ZodObject<{
    processingStageId: z.ZodNumber;
    day: z.ZodNumber;
    temperature: z.ZodNumber;
    humidity: z.ZodNumber;
    pH: z.ZodNumber;
    moisturePercentage: z.ZodNumber;
    currentQuantity: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    processingStageId: number;
    day: number;
    temperature: number;
    humidity: number;
    pH: number;
    moisturePercentage: number;
    currentQuantity: number;
}, {
    processingStageId: number;
    day: number;
    temperature: number;
    humidity: number;
    pH: number;
    moisturePercentage: number;
    currentQuantity: number;
}>;
export type CreateDryingEntryInput = z.infer<typeof createDryingEntrySchema>;
//# sourceMappingURL=processingStage.d.ts.map