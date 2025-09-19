export * from "./schemas/auth";
export * from "./schemas/farmer";
export * from "./schemas/users";
export * from "./schemas/procurement";
export * from "./schemas/processingBatch";
export * from "./schemas/processingStage";
export * from "./schemas/sale";

// Export all Prisma types and models
export * from "@prisma/client";

// Re-export specific types that might be missing
export type {
  Farmer,
  Procurement,
  ProcessingBatch,
  ProcessingStage,
  Drying,
  Sale,
  User,
  Field,
  BankDetails,
  FarmerDocuments,
  Gender,
  Relationship,
  Role,
  ProcessingStageStatus,
} from "@prisma/client";

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
