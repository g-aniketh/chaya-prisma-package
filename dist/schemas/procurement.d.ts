import { z } from "zod";
export declare const createProcurementSchema: z.ZodObject<{
    farmerId: z.ZodNumber;
    crop: z.ZodString;
    procuredForm: z.ZodString;
    speciality: z.ZodString;
    quantity: z.ZodNumber;
    date: z.ZodEffects<z.ZodString, Date, string>;
    time: z.ZodString;
    lotNo: z.ZodNumber;
    procuredBy: z.ZodString;
    vehicleNo: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: Date;
    farmerId: number;
    crop: string;
    procuredForm: string;
    speciality: string;
    quantity: number;
    time: string;
    lotNo: number;
    procuredBy: string;
    vehicleNo: string;
}, {
    date: string;
    farmerId: number;
    crop: string;
    procuredForm: string;
    speciality: string;
    quantity: number;
    time: string;
    lotNo: number;
    procuredBy: string;
    vehicleNo: string;
}>;
export type CreateProcurementInput = z.infer<typeof createProcurementSchema>;
export declare const updateProcurementSchema: z.ZodObject<{
    farmerId: z.ZodOptional<z.ZodNumber>;
    crop: z.ZodOptional<z.ZodString>;
    procuredForm: z.ZodOptional<z.ZodString>;
    speciality: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodNumber>;
    date: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    time: z.ZodOptional<z.ZodString>;
    lotNo: z.ZodOptional<z.ZodNumber>;
    procuredBy: z.ZodOptional<z.ZodString>;
    vehicleNo: z.ZodOptional<z.ZodString>;
} & {
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    date?: Date | undefined;
    farmerId?: number | undefined;
    crop?: string | undefined;
    procuredForm?: string | undefined;
    speciality?: string | undefined;
    quantity?: number | undefined;
    time?: string | undefined;
    lotNo?: number | undefined;
    procuredBy?: string | undefined;
    vehicleNo?: string | undefined;
}, {
    id: number;
    date?: string | undefined;
    farmerId?: number | undefined;
    crop?: string | undefined;
    procuredForm?: string | undefined;
    speciality?: string | undefined;
    quantity?: number | undefined;
    time?: string | undefined;
    lotNo?: number | undefined;
    procuredBy?: string | undefined;
    vehicleNo?: string | undefined;
}>;
export type UpdateProcurementInput = z.infer<typeof updateProcurementSchema>;
export declare const procurementQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodEffects<z.ZodString, number, string>>;
    limit: z.ZodDefault<z.ZodEffects<z.ZodString, number, string>>;
    search: z.ZodOptional<z.ZodString>;
    farmerId: z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>;
    crop: z.ZodOptional<z.ZodString>;
    lotNo: z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>;
    isBatched: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    search?: string | undefined;
    farmerId?: number | undefined;
    crop?: string | undefined;
    lotNo?: number | undefined;
    isBatched?: boolean | undefined;
}, {
    page?: string | undefined;
    limit?: string | undefined;
    search?: string | undefined;
    farmerId?: string | undefined;
    crop?: string | undefined;
    lotNo?: string | undefined;
    isBatched?: boolean | undefined;
}>;
export type ProcurementQuery = z.infer<typeof procurementQuerySchema>;
//# sourceMappingURL=procurement.d.ts.map