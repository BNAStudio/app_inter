import { Dispatch, ReactNode, SetStateAction } from "react";

export type UserType = {
    id: number,
    name: string,
    lastname: string,
    img: string,
    nationality: string
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
}

export interface CoursesState {
    courses: Course[];
}

export type CoursesAction =
    | { type: 'ADD_COURSE'; payload: Course }
    | { type: 'REMOVE_COURSE'; payload: number };

export interface CoursesContextType {
    state: CoursesState;
    addCourse: (course: Course) => void;
    removeCourse: (courseId: number) => void;
    setShowDetails: Dispatch<SetStateAction<boolean | undefined>>;
    showDetails: boolean | undefined;
    calculateTotals: () => Totals;
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
}

export interface Totals {
    totalCredits: number;
    totalAmount: number;
}

export interface ExchangeRates {
    USD: number;
    EUR: number;
}