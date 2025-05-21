import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<["ADMIN", "STAFF"]>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    role: "ADMIN" | "STAFF";
}, {
    email: string;
    password: string;
    name: string;
    role?: "ADMIN" | "STAFF" | undefined;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
//# sourceMappingURL=auth.d.ts.map