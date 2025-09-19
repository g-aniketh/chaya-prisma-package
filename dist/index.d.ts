export * from "./schemas/auth";
export * from "./schemas/farmer";
export * from "./schemas/users";
export * from "./schemas/procurement";
export * from "./schemas/processingBatch";
export * from "./schemas/processingStage";
export * from "./schemas/sale";
export * from "@prisma/client";
export type { Farmer, Procurement, ProcessingBatch, ProcessingStage, Drying, Sale, User, Field, BankDetails, FarmerDocuments, Gender, Relationship, Role, ProcessingStageStatus, } from "@prisma/client";
export { PrismaClient } from "@prisma/client";
export declare const createPrismaClient: () => any;
declare let prisma: any;
export { prisma };
//# sourceMappingURL=index.d.ts.map