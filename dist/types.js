"use strict";
// Standalone types that don't import from @prisma/client
// This prevents browser bundling issues
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessingStageStatus = exports.Role = exports.Relationship = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var Relationship;
(function (Relationship) {
    Relationship["SELF"] = "SELF";
    Relationship["SPOUSE"] = "SPOUSE";
    Relationship["CHILD"] = "CHILD";
    Relationship["OTHER"] = "OTHER";
})(Relationship || (exports.Relationship = Relationship = {}));
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["STAFF"] = "STAFF";
})(Role || (exports.Role = Role = {}));
var ProcessingStageStatus;
(function (ProcessingStageStatus) {
    ProcessingStageStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ProcessingStageStatus["FINISHED"] = "FINISHED";
    ProcessingStageStatus["CANCELLED"] = "CANCELLED";
})(ProcessingStageStatus || (exports.ProcessingStageStatus = ProcessingStageStatus = {}));
//# sourceMappingURL=types.js.map