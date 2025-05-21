import { z } from 'zod';
export declare const createProcessingBatchFirstStageSchema: z.ZodObject<{
    processMethod: z.ZodEnum<["wet", "dry"]>;
    dateOfProcessing: z.ZodEffects<z.ZodString, Date, string>;
    doneBy: z.ZodString;
}, "strip", z.ZodTypeAny, {
    processMethod: "wet" | "dry";
    dateOfProcessing: Date;
    doneBy: string;
}, {
    processMethod: "wet" | "dry";
    dateOfProcessing: string;
    doneBy: string;
}>;
export declare const createProcessingBatchSchema: z.ZodObject<{
    crop: z.ZodString;
    lotNo: z.ZodNumber;
    procurementIds: z.ZodArray<z.ZodNumber, "many">;
    firstStageDetails: z.ZodObject<{
        processMethod: z.ZodEnum<["wet", "dry"]>;
        dateOfProcessing: z.ZodEffects<z.ZodString, Date, string>;
        doneBy: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        processMethod: "wet" | "dry";
        dateOfProcessing: Date;
        doneBy: string;
    }, {
        processMethod: "wet" | "dry";
        dateOfProcessing: string;
        doneBy: string;
    }>;
}, "strip", z.ZodTypeAny, {
    crop: string;
    lotNo: number;
    procurementIds: number[];
    firstStageDetails: {
        processMethod: "wet" | "dry";
        dateOfProcessing: Date;
        doneBy: string;
    };
}, {
    crop: string;
    lotNo: number;
    procurementIds: number[];
    firstStageDetails: {
        processMethod: "wet" | "dry";
        dateOfProcessing: string;
        doneBy: string;
    };
}>;
export type CreateProcessingBatchInput = z.infer<typeof createProcessingBatchSchema>;
export declare const processingBatchQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodEffects<z.ZodString, number, string>>;
    limit: z.ZodDefault<z.ZodEffects<z.ZodString, number, string>>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<[string, ...string[]]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    status?: string | undefined;
    search?: string | undefined;
}, {
    status?: string | undefined;
    page?: string | undefined;
    limit?: string | undefined;
    search?: string | undefined;
}>;
export type ProcessingBatchQuery = z.infer<typeof processingBatchQuerySchema>;
//# sourceMappingURL=processingBatch.d.ts.map