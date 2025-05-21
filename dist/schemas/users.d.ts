import { z } from 'zod';
export declare const userSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    email: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<["ADMIN", "STAFF"]>>;
    isEnabled: z.ZodDefault<z.ZodBoolean>;
    isActive: z.ZodDefault<z.ZodBoolean>;
    lastLoginAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    email: string;
    name: string;
    role: "ADMIN" | "STAFF";
    isActive: boolean;
    isEnabled: boolean;
    id?: number | undefined;
    lastLoginAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}, {
    email: string;
    name: string;
    role?: "ADMIN" | "STAFF" | undefined;
    id?: number | undefined;
    isActive?: boolean | undefined;
    isEnabled?: boolean | undefined;
    lastLoginAt?: Date | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    isEnabled: z.ZodOptional<z.ZodBoolean>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    password?: string | undefined;
    name?: string | undefined;
    isEnabled?: boolean | undefined;
}, {
    email?: string | undefined;
    password?: string | undefined;
    name?: string | undefined;
    isEnabled?: boolean | undefined;
}>;
export type ZodUser = z.infer<typeof userSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
//# sourceMappingURL=users.d.ts.map