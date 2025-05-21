"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleSchema = exports.createSaleFormSchema = void 0;
const zod_1 = require("zod");
exports.createSaleFormSchema = zod_1.z.object({
    quantitySold: zod_1.z.coerce
        .number({
        required_error: 'Quantity sold is required',
        invalid_type_error: 'Quantity sold must be a number',
    })
        .positive('Quantity sold must be positive'),
    dateOfSaleInput: zod_1.z.date({
        required_error: 'Date of Sale is required',
        invalid_type_error: "That's not a valid date!",
    }),
    timeOfSaleInput: zod_1.z.string().regex(/^\d{2}:\d{2}:\d{2}$/, 'Invalid time format (HH:mm:ss)'),
});
exports.createSaleSchema = zod_1.z.object({
    processingBatchId: zod_1.z.number().int(),
    processingStageId: zod_1.z.number().int(),
    quantitySold: zod_1.z.coerce
        .number({
        required_error: 'Quantity sold is required',
        invalid_type_error: 'Quantity sold must be a number',
    })
        .positive('Quantity sold must be positive'),
    dateOfSale: zod_1.z
        .string()
        .datetime({ message: 'Invalid datetime string. Must be UTC.' })
        .transform(str => new Date(str)),
});
//# sourceMappingURL=sale.js.map