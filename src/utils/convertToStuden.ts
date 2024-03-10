import { Student, UserType } from "../types/types";

export const convertUserToStudent = (userData: UserType): Student => {
    return { ...userData, credits: 0};
};