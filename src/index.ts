// Server-side exports - includes Prisma client
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

// Only export Prisma client for server-side usage
export { PrismaClient } from "@prisma/client";

// Create a function to get prisma instance instead of exporting it directly
export const createPrismaClient = () => {
  const { PrismaClient } = require("@prisma/client");
  return new PrismaClient();
};

// For backward compatibility, export prisma but only in server environments
let prisma: any = null;
if (typeof window === 'undefined') {
  // Only create prisma client on server side
  const { PrismaClient } = require("@prisma/client");
  prisma = new PrismaClient();
}
export { prisma };
