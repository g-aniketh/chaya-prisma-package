import { z } from 'zod';
export declare const farmerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    surveyNumber: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    relationship: z.ZodEnum<["SELF", "SPOUSE", "CHILD", "OTHER"]>;
    gender: z.ZodEnum<["MALE", "FEMALE", "OTHER"]>;
    community: z.ZodString;
    aadharNumber: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    mandal: z.ZodString;
    village: z.ZodString;
    panchayath: z.ZodString;
    dateOfBirth: z.ZodEffects<z.ZodString, Date, string>;
    age: z.ZodNumber;
    contactNumber: z.ZodString;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    relationship: "SELF" | "SPOUSE" | "CHILD" | "OTHER";
    gender: "OTHER" | "MALE" | "FEMALE";
    community: string;
    aadharNumber: string;
    state: string;
    district: string;
    mandal: string;
    village: string;
    panchayath: string;
    dateOfBirth: Date;
    age: number;
    contactNumber: string;
    isActive: boolean;
    id?: number | undefined;
    surveyNumber?: string | undefined;
}, {
    name: string;
    relationship: "SELF" | "SPOUSE" | "CHILD" | "OTHER";
    gender: "OTHER" | "MALE" | "FEMALE";
    community: string;
    aadharNumber: string;
    state: string;
    district: string;
    mandal: string;
    village: string;
    panchayath: string;
    dateOfBirth: string;
    age: number;
    contactNumber: string;
    id?: number | undefined;
    surveyNumber?: string | undefined;
    isActive?: boolean | undefined;
}>;
export declare const bankDetailsSchema: z.ZodObject<{
    ifscCode: z.ZodString;
    bankName: z.ZodString;
    branchName: z.ZodString;
    accountNumber: z.ZodString;
    address: z.ZodString;
    bankCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    ifscCode: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    address: string;
    bankCode: string;
}, {
    ifscCode: string;
    bankName: string;
    branchName: string;
    accountNumber: string;
    address: string;
    bankCode: string;
}>;
export declare const farmerDocumentsSchema: z.ZodObject<{
    profilePicUrl: z.ZodString;
    aadharDocUrl: z.ZodString;
    bankDocUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    profilePicUrl: string;
    aadharDocUrl: string;
    bankDocUrl: string;
}, {
    profilePicUrl: string;
    aadharDocUrl: string;
    bankDocUrl: string;
}>;
export declare const fieldSchema: z.ZodObject<{
    areaHa: z.ZodNumber;
    yieldEstimate: z.ZodNumber;
    location: z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
        accuracy: z.ZodNumber;
        altitude: z.ZodNullable<z.ZodNumber>;
        altitudeAccuracy: z.ZodNullable<z.ZodNumber>;
        timestamp: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
        accuracy: number;
        altitude: number | null;
        altitudeAccuracy: number | null;
        timestamp: number;
    }, {
        lat: number;
        lng: number;
        accuracy: number;
        altitude: number | null;
        altitudeAccuracy: number | null;
        timestamp: number;
    }>;
    landDocumentUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    areaHa: number;
    yieldEstimate: number;
    location: {
        lat: number;
        lng: number;
        accuracy: number;
        altitude: number | null;
        altitudeAccuracy: number | null;
        timestamp: number;
    };
    landDocumentUrl: string;
}, {
    areaHa: number;
    yieldEstimate: number;
    location: {
        lat: number;
        lng: number;
        accuracy: number;
        altitude: number | null;
        altitudeAccuracy: number | null;
        timestamp: number;
    };
    landDocumentUrl: string;
}>;
export declare const createFarmerSchema: z.ZodObject<{
    farmer: z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        surveyNumber: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        relationship: z.ZodEnum<["SELF", "SPOUSE", "CHILD", "OTHER"]>;
        gender: z.ZodEnum<["MALE", "FEMALE", "OTHER"]>;
        community: z.ZodString;
        aadharNumber: z.ZodString;
        state: z.ZodString;
        district: z.ZodString;
        mandal: z.ZodString;
        village: z.ZodString;
        panchayath: z.ZodString;
        dateOfBirth: z.ZodEffects<z.ZodString, Date, string>;
        age: z.ZodNumber;
        contactNumber: z.ZodString;
        isActive: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        relationship: "SELF" | "SPOUSE" | "CHILD" | "OTHER";
        gender: "OTHER" | "MALE" | "FEMALE";
        community: string;
        aadharNumber: string;
        state: string;
        district: string;
        mandal: string;
        village: string;
        panchayath: string;
        dateOfBirth: Date;
        age: number;
        contactNumber: string;
        isActive: boolean;
        id?: number | undefined;
        surveyNumber?: string | undefined;
    }, {
        name: string;
        relationship: "SELF" | "SPOUSE" | "CHILD" | "OTHER";
        gender: "OTHER" | "MALE" | "FEMALE";
        community: string;
        aadharNumber: string;
        state: string;
        district: string;
        mandal: string;
        village: string;
        panchayath: string;
        dateOfBirth: string;
        age: number;
        contactNumber: string;
        id?: number | undefined;
        surveyNumber?: string | undefined;
        isActive?: boolean | undefined;
    }>;
    bankDetails: z.ZodObject<{
        ifscCode: z.ZodString;
        bankName: z.ZodString;
        branchName: z.ZodString;
        accountNumber: z.ZodString;
        address: z.ZodString;
        bankCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        ifscCode: string;
        bankName: string;
        branchName: string;
        accountNumber: string;
        address: string;
        bankCode: string;
    }, {
        ifscCode: string;
        bankName: string;
        branchName: string;
        accountNumber: string;
        address: string;
        bankCode: string;
    }>;
    documents: z.ZodObject<{
        profilePicUrl: z.ZodString;
        aadharDocUrl: z.ZodString;
        bankDocUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        profilePicUrl: string;
        aadharDocUrl: string;
        bankDocUrl: string;
    }, {
        profilePicUrl: string;
        aadharDocUrl: string;
        bankDocUrl: string;
    }>;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        areaHa: z.ZodNumber;
        yieldEstimate: z.ZodNumber;
        location: z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
            accuracy: z.ZodNumber;
            altitude: z.ZodNullable<z.ZodNumber>;
            altitudeAccuracy: z.ZodNullable<z.ZodNumber>;
            timestamp: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        }, {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        }>;
        landDocumentUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        areaHa: number;
        yieldEstimate: number;
        location: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        };
        landDocumentUrl: string;
    }, {
        areaHa: number;
        yieldEstimate: number;
        location: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        };
        landDocumentUrl: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    farmer: {
        name: string;
        relationship: "SELF" | "SPOUSE" | "CHILD" | "OTHER";
        gender: "OTHER" | "MALE" | "FEMALE";
        community: string;
        aadharNumber: string;
        state: string;
        district: string;
        mandal: string;
        village: string;
        panchayath: string;
        dateOfBirth: Date;
        age: number;
        contactNumber: string;
        isActive: boolean;
        id?: number | undefined;
        surveyNumber?: string | undefined;
    };
    bankDetails: {
        ifscCode: string;
        bankName: string;
        branchName: string;
        accountNumber: string;
        address: string;
        bankCode: string;
    };
    documents: {
        profilePicUrl: string;
        aadharDocUrl: string;
        bankDocUrl: string;
    };
    fields?: {
        areaHa: number;
        yieldEstimate: number;
        location: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        };
        landDocumentUrl: string;
    }[] | undefined;
}, {
    farmer: {
        name: string;
        relationship: "SELF" | "SPOUSE" | "CHILD" | "OTHER";
        gender: "OTHER" | "MALE" | "FEMALE";
        community: string;
        aadharNumber: string;
        state: string;
        district: string;
        mandal: string;
        village: string;
        panchayath: string;
        dateOfBirth: string;
        age: number;
        contactNumber: string;
        id?: number | undefined;
        surveyNumber?: string | undefined;
        isActive?: boolean | undefined;
    };
    bankDetails: {
        ifscCode: string;
        bankName: string;
        branchName: string;
        accountNumber: string;
        address: string;
        bankCode: string;
    };
    documents: {
        profilePicUrl: string;
        aadharDocUrl: string;
        bankDocUrl: string;
    };
    fields?: {
        areaHa: number;
        yieldEstimate: number;
        location: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        };
        landDocumentUrl: string;
    }[] | undefined;
}>;
export declare const updateFarmerSchema: z.ZodObject<{
    farmer: z.ZodObject<{
        id: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        surveyNumber: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        name: z.ZodOptional<z.ZodString>;
        relationship: z.ZodOptional<z.ZodEnum<["SELF", "SPOUSE", "CHILD", "OTHER"]>>;
        gender: z.ZodOptional<z.ZodEnum<["MALE", "FEMALE", "OTHER"]>>;
        community: z.ZodOptional<z.ZodString>;
        aadharNumber: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        district: z.ZodOptional<z.ZodString>;
        mandal: z.ZodOptional<z.ZodString>;
        village: z.ZodOptional<z.ZodString>;
        panchayath: z.ZodOptional<z.ZodString>;
        dateOfBirth: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        age: z.ZodOptional<z.ZodNumber>;
        contactNumber: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        id?: number | undefined;
        surveyNumber?: string | undefined;
        relationship?: "SELF" | "SPOUSE" | "CHILD" | "OTHER" | undefined;
        gender?: "OTHER" | "MALE" | "FEMALE" | undefined;
        community?: string | undefined;
        aadharNumber?: string | undefined;
        state?: string | undefined;
        district?: string | undefined;
        mandal?: string | undefined;
        village?: string | undefined;
        panchayath?: string | undefined;
        dateOfBirth?: Date | undefined;
        age?: number | undefined;
        contactNumber?: string | undefined;
        isActive?: boolean | undefined;
    }, {
        name?: string | undefined;
        id?: number | undefined;
        surveyNumber?: string | undefined;
        relationship?: "SELF" | "SPOUSE" | "CHILD" | "OTHER" | undefined;
        gender?: "OTHER" | "MALE" | "FEMALE" | undefined;
        community?: string | undefined;
        aadharNumber?: string | undefined;
        state?: string | undefined;
        district?: string | undefined;
        mandal?: string | undefined;
        village?: string | undefined;
        panchayath?: string | undefined;
        dateOfBirth?: string | undefined;
        age?: number | undefined;
        contactNumber?: string | undefined;
        isActive?: boolean | undefined;
    }>;
    bankDetails: z.ZodOptional<z.ZodObject<{
        ifscCode: z.ZodOptional<z.ZodString>;
        bankName: z.ZodOptional<z.ZodString>;
        branchName: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        bankCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        ifscCode?: string | undefined;
        bankName?: string | undefined;
        branchName?: string | undefined;
        accountNumber?: string | undefined;
        address?: string | undefined;
        bankCode?: string | undefined;
    }, {
        ifscCode?: string | undefined;
        bankName?: string | undefined;
        branchName?: string | undefined;
        accountNumber?: string | undefined;
        address?: string | undefined;
        bankCode?: string | undefined;
    }>>;
    documents: z.ZodOptional<z.ZodObject<{
        profilePicUrl: z.ZodOptional<z.ZodString>;
        aadharDocUrl: z.ZodOptional<z.ZodString>;
        bankDocUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        profilePicUrl?: string | undefined;
        aadharDocUrl?: string | undefined;
        bankDocUrl?: string | undefined;
    }, {
        profilePicUrl?: string | undefined;
        aadharDocUrl?: string | undefined;
        bankDocUrl?: string | undefined;
    }>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        areaHa: z.ZodOptional<z.ZodNumber>;
        yieldEstimate: z.ZodOptional<z.ZodNumber>;
        location: z.ZodOptional<z.ZodObject<{
            lat: z.ZodNumber;
            lng: z.ZodNumber;
            accuracy: z.ZodNumber;
            altitude: z.ZodNullable<z.ZodNumber>;
            altitudeAccuracy: z.ZodNullable<z.ZodNumber>;
            timestamp: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        }, {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        }>>;
        landDocumentUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        areaHa?: number | undefined;
        yieldEstimate?: number | undefined;
        location?: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        } | undefined;
        landDocumentUrl?: string | undefined;
    }, {
        areaHa?: number | undefined;
        yieldEstimate?: number | undefined;
        location?: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        } | undefined;
        landDocumentUrl?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    farmer: {
        name?: string | undefined;
        id?: number | undefined;
        surveyNumber?: string | undefined;
        relationship?: "SELF" | "SPOUSE" | "CHILD" | "OTHER" | undefined;
        gender?: "OTHER" | "MALE" | "FEMALE" | undefined;
        community?: string | undefined;
        aadharNumber?: string | undefined;
        state?: string | undefined;
        district?: string | undefined;
        mandal?: string | undefined;
        village?: string | undefined;
        panchayath?: string | undefined;
        dateOfBirth?: Date | undefined;
        age?: number | undefined;
        contactNumber?: string | undefined;
        isActive?: boolean | undefined;
    };
    bankDetails?: {
        ifscCode?: string | undefined;
        bankName?: string | undefined;
        branchName?: string | undefined;
        accountNumber?: string | undefined;
        address?: string | undefined;
        bankCode?: string | undefined;
    } | undefined;
    documents?: {
        profilePicUrl?: string | undefined;
        aadharDocUrl?: string | undefined;
        bankDocUrl?: string | undefined;
    } | undefined;
    fields?: {
        areaHa?: number | undefined;
        yieldEstimate?: number | undefined;
        location?: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        } | undefined;
        landDocumentUrl?: string | undefined;
    }[] | undefined;
}, {
    farmer: {
        name?: string | undefined;
        id?: number | undefined;
        surveyNumber?: string | undefined;
        relationship?: "SELF" | "SPOUSE" | "CHILD" | "OTHER" | undefined;
        gender?: "OTHER" | "MALE" | "FEMALE" | undefined;
        community?: string | undefined;
        aadharNumber?: string | undefined;
        state?: string | undefined;
        district?: string | undefined;
        mandal?: string | undefined;
        village?: string | undefined;
        panchayath?: string | undefined;
        dateOfBirth?: string | undefined;
        age?: number | undefined;
        contactNumber?: string | undefined;
        isActive?: boolean | undefined;
    };
    bankDetails?: {
        ifscCode?: string | undefined;
        bankName?: string | undefined;
        branchName?: string | undefined;
        accountNumber?: string | undefined;
        address?: string | undefined;
        bankCode?: string | undefined;
    } | undefined;
    documents?: {
        profilePicUrl?: string | undefined;
        aadharDocUrl?: string | undefined;
        bankDocUrl?: string | undefined;
    } | undefined;
    fields?: {
        areaHa?: number | undefined;
        yieldEstimate?: number | undefined;
        location?: {
            lat: number;
            lng: number;
            accuracy: number;
            altitude: number | null;
            altitudeAccuracy: number | null;
            timestamp: number;
        } | undefined;
        landDocumentUrl?: string | undefined;
    }[] | undefined;
}>;
export declare const farmerQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodEffects<z.ZodString, number, string>>;
    limit: z.ZodDefault<z.ZodEffects<z.ZodString, number, string>>;
    search: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    district: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<["MALE", "FEMALE", "OTHER"]>>;
    isActive: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>, boolean, unknown>;
}, "strip", z.ZodTypeAny, {
    isActive: boolean;
    page: number;
    limit: number;
    gender?: "OTHER" | "MALE" | "FEMALE" | undefined;
    state?: string | undefined;
    district?: string | undefined;
    search?: string | undefined;
}, {
    gender?: "OTHER" | "MALE" | "FEMALE" | undefined;
    state?: string | undefined;
    district?: string | undefined;
    isActive?: unknown;
    page?: string | undefined;
    limit?: string | undefined;
    search?: string | undefined;
}>;
export type FarmerInput = z.infer<typeof farmerSchema>;
export type BankDetailsInput = z.infer<typeof bankDetailsSchema>;
export type FarmerDocumentsInput = z.infer<typeof farmerDocumentsSchema>;
export type FieldInput = z.infer<typeof fieldSchema>;
export type CreateFarmerInput = z.infer<typeof createFarmerSchema>;
export type UpdateFarmerInput = z.infer<typeof updateFarmerSchema>;
export type FarmerQuery = z.infer<typeof farmerQuerySchema>;
//# sourceMappingURL=farmer.d.ts.map