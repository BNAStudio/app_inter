import { Dispatch, ReactNode, SetStateAction } from "react";

export type UserType = {
    id: number,
    name: string,
    lastname: string,
    img: string,
    nationality: string
    email?: string;
}

export type AmountProps = {
    badge: string;
    amount: number
}

export interface Course {
    id: number;
    name: string;
    teacher: string;
    credits: number;
    price: number;
    isSelected: boolean
    userInfo?: UserType[] | UserType

}

export interface CoursesState {
    courses: Course[];
    confirm: boolean;
    userInfo: UserType[]

}

export type CoursesAction =
    | { type: 'ADD_COURSE'; payload: Course }
    | { type: 'REMOVE_COURSE'; payload: number }
    | { type: 'CONFIRM_COURSES' };

// Tipos para el value del provider 
export interface CoursesContextType {
    enrolledCourses: CoursesState;
    addCourse: (course: Course) => void;
    removeCourse: (courseId: number) => void;
    setShowDetails: Dispatch<SetStateAction<boolean | undefined>>;
    showDetails: boolean | undefined;
    calculateTotals: () => Totals;
    enrolledStudentsState: EnrolledCourse[];
    dispatch: Dispatch<CoursesAction>;
    showModal: boolean | undefined;
    setShowModal: Dispatch<SetStateAction<boolean | undefined>>;
    setCurrentCourseId: Dispatch<SetStateAction<number | undefined>>;
    currentCourseData: EnrolledCourse | undefined;
    updateUserData: (userData: Partial<UserType>) => void;
    currentUserData: UserType
}

export interface CoursesProviderProps {
    children: ReactNode;
}


export interface DetailCourseRowProps {
    courseInfo: Course;
    onDelete: (courseId: number) => void;
}

export interface RowTableProps {
    courseInfo: Course;
    onAddCourse: (courseId: number) => void;
}

export interface TagCourseProps {
    courseName: string;
    idCourse: number;
}

export interface Totals {
    totalCredits: number;
    totalAmount: number;
}

export interface ExchangeRates {
    USD: number;
    EUR: number;
}

export interface Student {
    id: number;
    name: string;
    lastname: string;
    nationality: string;
    credits: number;
    img: string;
}

export interface EnrolledCourse {
    courseId: number;
    students: Student[];
}

export interface SelectedCourse {
    id: number;
    name: string;
    teacher: string;
    credits: number;
    price: number;
}

export interface FormDataTypes {
    name: string;
    lastname: string;
    email: string;
}