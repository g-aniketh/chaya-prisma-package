"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters'),
    email: zod_1.z.string().email('Invalid email address'),
    role: zod_1.z.enum(['ADMIN', 'STAFF']).default('STAFF'),
    isEnabled: zod_1.z.boolean().default(true),
    isActive: zod_1.z.boolean().default(false),
    lastLoginAt: zod_1.z.date().nullable().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
exports.updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters').optional(),
    email: zod_1.z.string().email('Invalid email address').optional(),
    isEnabled: zod_1.z.boolean().optional(),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters').optional(),
});
//# sourceMappingURL=users.js.map