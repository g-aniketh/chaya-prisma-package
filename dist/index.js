"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.createPrismaClient = exports.PrismaClient = void 0;
__exportStar(require("./schemas/auth"), exports);
__exportStar(require("./schemas/farmer"), exports);
__exportStar(require("./schemas/users"), exports);
__exportStar(require("./schemas/procurement"), exports);
__exportStar(require("./schemas/processingBatch"), exports);
__exportStar(require("./schemas/processingStage"), exports);
__exportStar(require("./schemas/sale"), exports);
// Export all Prisma types and models
__exportStar(require("@prisma/client"), exports);
// Only export Prisma client for server-side usage
// This prevents browser bundling issues
var client_1 = require("@prisma/client");
Object.defineProperty(exports, "PrismaClient", { enumerable: true, get: function () { return client_1.PrismaClient; } });
// Create a function to get prisma instance instead of exporting it directly
const createPrismaClient = () => {
    const { PrismaClient } = require("@prisma/client");
    return new PrismaClient();
};
exports.createPrismaClient = createPrismaClient;
// For backward compatibility, export prisma but only in server environments
let prisma = null;
exports.prisma = prisma;
if (typeof window === 'undefined') {
    // Only create prisma client on server side
    const { PrismaClient } = require("@prisma/client");
    exports.prisma = prisma = new PrismaClient();
}
//# sourceMappingURL=index.js.map