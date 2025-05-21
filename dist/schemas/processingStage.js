"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDryingEntrySchema = exports.finalizeProcessingStageSchema = exports.createProcessingStageSchema = void 0;
const zod_1 = require("zod");
exports.createProcessingStageSchema = zod_1.z.object({
    processingBatchId: zod_1.z.number().int(),
    previousStageId: zod_1.z.number().int().optional(),
    processMethod: zod_1.z.enum(['wet', 'dry'], { required_error: 'Process method is required' }),
    dateOfProcessing: zod_1.z
        .string()
        .datetime({ message: 'Invalid datetime string. Must be UTC.' })
        .transform(str => new Date(str)),
    doneBy: zod_1.z.string().min(1, 'Person responsible is required'),
});
exports.finalizeProcessingStageSchema = zod_1.z.object({
    dateOfCompletion: zod_1.z
        .string()
        .datetime({ message: 'Invalid datetime string. Must be UTC.' })
        .transform(str => new Date(str)),
    quantityAfterProcess: zod_1.z.coerce
        .number({
        required_error: 'Final quantity is required',
        invalid_type_error: 'Final quantity must be a number',
    })
        .positive('Final quantity must be a positive number'),
});
exports.createDryingEntrySchema = zod_1.z.object({
    processingStageId: zod_1.z.number().int(),
    day: zod_1.z.number().int().positive('Day must be a positive integer'),
    temperature: zod_1.z.number({ required_error: 'Temperature is required' }),
    humidity: zod_1.z.number().min(0).max(100, 'Humidity must be between 0 and 100'),
    pH: zod_1.z.number().min(0).max(14, 'pH must be between 0 and 14'),
    moisturePercentage: zod_1.z.number().min(0).max(100, 'Moisture % must be between 0 and 100'),
    currentQuantity: zod_1.z.coerce
        .number({
        required_error: 'Current quantity is required',
        invalid_type_error: 'Current quantity must be a number',
    })
        .positive('Current quantity after drying must be positive'),
});
//# sourceMappingURL=processingStage.js.map