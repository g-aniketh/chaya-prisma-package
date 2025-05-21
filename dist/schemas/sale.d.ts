import { z } from 'zod';
export declare const createSaleFormSchema: z.ZodObject<{
    quantitySold: z.ZodNumber;
    dateOfSaleInput: z.ZodDate;
    timeOfSaleInput: z.ZodString;
}, "strip", z.ZodTypeAny, {
    quantitySold: number;
    dateOfSaleInput: Date;
    timeOfSaleInput: string;
}, {
    quantitySold: number;
    dateOfSaleInput: Date;
    timeOfSaleInput: string;
}>;
export type CreateSaleFormValues = z.infer<typeof createSaleFormSchema>;
export declare const createSaleSchema: z.ZodObject<{
    processingBatchId: z.ZodNumber;
    processingStageId: z.ZodNumber;
    quantitySold: z.ZodNumber;
    dateOfSale: z.ZodEffects<z.ZodString, Date, string>;
}, "strip", z.ZodTypeAny, {
    processingBatchId: number;
    processingStageId: number;
    quantitySold: number;
    dateOfSale: Date;
}, {
    processingBatchId: number;
    processingStageId: number;
    quantitySold: number;
    dateOfSale: string;
}>;
export type CreateSaleInput = z.infer<typeof createSaleSchema>;
//# sourceMappingURL=sale.d.ts.map