// Standalone types that don't import from @prisma/client
// This prevents browser bundling issues

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum Relationship {
  SELF = 'SELF',
  SPOUSE = 'SPOUSE',
  CHILD = 'CHILD',
  OTHER = 'OTHER'
}

export enum Role {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF'
}

export enum ProcessingStageStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED'
}
