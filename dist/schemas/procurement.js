"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurementQuerySchema = exports.updateProcurementSchema = exports.createProcurementSchema = void 0;
const zod_1 = require("zod");
exports.createProcurementSchema = zod_1.z.object({
    farmerId: zod_1.z.number(),
    crop: zod_1.z.string().min(1, "Crop is required"),
    procuredForm: zod_1.z.string().min(1, "Procured form is required"),
    speciality: zod_1.z.string().min(1, "Speciality is required"),
    quantity: zod_1.z.number().positive("Quantity must be a positive number"),
    date: zod_1.z.string().transform(str => new Date(str)),
    time: zod_1.z
        .string()
        .regex(/^\d{2}:\d{2}:\d{2}$/, "Invalid time format (expected HH:mm:ss)"),
    lotNo: zod_1.z
        .number()
        .int()
        .min(1, "Lot number must be a positive integer")
        .max(3, "Only 1, 2, 3 Lot Numbers are allowed"),
    procuredBy: zod_1.z.string().min(1, "Procured by is required"),
    vehicleNo: zod_1.z.string().min(1, "Vehicle number is required"),
});
exports.updateProcurementSchema = exports.createProcurementSchema
    .partial()
    .extend({
    id: zod_1.z.number(),
});
exports.procurementQuerySchema = zod_1.z.object({
    page: zod_1.z.string().transform(Number).default("1"),
    limit: zod_1.z.string().transform(Number).default("10"),
    search: zod_1.z.string().optional(),
    farmerId: zod_1.z.string().transform(Number).optional(),
    crop: zod_1.z.string().optional(),
    lotNo: zod_1.z.string().transform(Number).optional(),
    isBatched: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=procurement.js.map