"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processingBatchQuerySchema = exports.createProcessingBatchSchema = exports.createProcessingBatchFirstStageSchema = void 0;
const zod_1 = require("zod");
const types_1 = require("../types");
exports.createProcessingBatchFirstStageSchema = zod_1.z.object({
    processMethod: zod_1.z.enum(['wet', 'dry'], { required_error: 'Process method is required' }),
    dateOfProcessing: zod_1.z
        .string()
        .datetime({ message: 'Invalid datetime string. Must be UTC.' })
        .transform(str => new Date(str)),
    doneBy: zod_1.z.string().min(1, 'Person responsible for P1 is required'),
});
exports.createProcessingBatchSchema = zod_1.z.object({
    crop: zod_1.z.string().min(1, 'Crop is required'),
    lotNo: zod_1.z.number().int().min(1, 'Lot number is required'),
    procurementIds: zod_1.z.array(zod_1.z.number().int()).min(1, 'At least one procurement must be selected'),
    firstStageDetails: exports.createProcessingBatchFirstStageSchema,
});
const queryStatusEnumValues = [
    types_1.ProcessingStageStatus.IN_PROGRESS,
    types_1.ProcessingStageStatus.FINISHED,
    types_1.ProcessingStageStatus.CANCELLED,
    'SOLD_OUT',
];
exports.processingBatchQuerySchema = zod_1.z.object({
    page: zod_1.z.string().transform(Number).default('1'),
    limit: zod_1.z.string().transform(Number).default('10'),
    search: zod_1.z.string().optional(),
    status: zod_1.z.enum(queryStatusEnumValues).optional(),
});
//# sourceMappingURL=processingBatch.js.map