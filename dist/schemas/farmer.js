"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farmerQuerySchema = exports.updateFarmerSchema = exports.createFarmerSchema = exports.fieldSchema = exports.farmerDocumentsSchema = exports.bankDetailsSchema = exports.farmerSchema = void 0;
const zod_1 = require("zod");
exports.farmerSchema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    surveyNumber: zod_1.z.string().optional(),
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters'),
    relationship: zod_1.z.enum(['SELF', 'SPOUSE', 'CHILD', 'OTHER']),
    gender: zod_1.z.enum(['MALE', 'FEMALE', 'OTHER']),
    community: zod_1.z.string().min(1, 'Community is required'),
    aadharNumber: zod_1.z.string().min(12, 'Valid Aadhar number required').max(12),
    state: zod_1.z.string().min(1, 'State is required'),
    district: zod_1.z.string().min(1, 'District is required'),
    mandal: zod_1.z.string().min(1, 'Mandal is required'),
    village: zod_1.z.string().min(1, 'Village is required'),
    panchayath: zod_1.z.string().min(1, 'Panchayath is required'),
    dateOfBirth: zod_1.z.string().transform(str => new Date(str)),
    age: zod_1.z.number().int().min(18, 'Farmer must be at least 18 years old'),
    contactNumber: zod_1.z.string().min(10, 'Valid contact number required'),
    isActive: zod_1.z.boolean().default(true),
});
exports.bankDetailsSchema = zod_1.z.object({
    ifscCode: zod_1.z.string().min(1, 'IFSC code is required'),
    bankName: zod_1.z.string().min(1, 'Bank name is required'),
    branchName: zod_1.z.string().min(1, 'Branch name is required'),
    accountNumber: zod_1.z.string().min(1, 'Account number is required'),
    address: zod_1.z.string().min(1, 'Bank address is required'),
    bankCode: zod_1.z.string().min(1, 'Bank code is required'),
});
exports.farmerDocumentsSchema = zod_1.z.object({
    profilePicUrl: zod_1.z.string().url('Valid profile picture URL required'),
    aadharDocUrl: zod_1.z.string().url('Valid Aadhar document URL required'),
    bankDocUrl: zod_1.z.string().url('Valid bank document URL required'),
});
exports.fieldSchema = zod_1.z.object({
    areaHa: zod_1.z.number().positive('Area must be a positive number'),
    yieldEstimate: zod_1.z.number().positive('Yield estimate must be a positive number'),
    location: zod_1.z.object({
        lat: zod_1.z.number(),
        lng: zod_1.z.number(),
        accuracy: zod_1.z.number(),
        altitude: zod_1.z.number().nullable(),
        altitudeAccuracy: zod_1.z.number().nullable(),
        timestamp: zod_1.z.number(),
    }),
    landDocumentUrl: zod_1.z.string().url('Valid land document URL required'),
});
exports.createFarmerSchema = zod_1.z.object({
    farmer: exports.farmerSchema,
    bankDetails: exports.bankDetailsSchema,
    documents: exports.farmerDocumentsSchema,
    fields: zod_1.z.array(exports.fieldSchema).optional(),
});
exports.updateFarmerSchema = zod_1.z.object({
    farmer: exports.farmerSchema.partial(),
    bankDetails: exports.bankDetailsSchema.partial().optional(),
    documents: exports.farmerDocumentsSchema.partial().optional(),
    fields: zod_1.z.array(exports.fieldSchema.partial()).optional(),
});
exports.farmerQuerySchema = zod_1.z.object({
    page: zod_1.z.string().transform(Number).default('1'),
    limit: zod_1.z.string().transform(Number).default('10'),
    search: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    district: zod_1.z.string().optional(),
    gender: zod_1.z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    isActive: zod_1.z.preprocess(val => {
        if (typeof val === 'string') {
            if (val.toLowerCase() === 'true')
                return true;
            if (val.toLowerCase() === 'false')
                return false;
        }
        return val;
    }, zod_1.z.boolean().optional().default(true)),
});
//# sourceMappingURL=farmer.js.map