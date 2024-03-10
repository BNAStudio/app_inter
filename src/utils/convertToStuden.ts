import { Student, UserType } from "../types/types";

export const convertUserToStudent = (userData: UserType): Student => {
    return {
        ...userData,
        credits: 0, // Establece un valor adecuado para 'credits'
    };
};