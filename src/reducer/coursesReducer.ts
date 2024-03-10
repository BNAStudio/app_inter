
import { CoursesAction, CoursesState } from "../types/types";
import { updateEnrolledStudents } from "../utils/updateEnrolledStudents";
import { enrolledStudents } from "../mocks/mockEnrollStudent";
import { userData } from "../mocks/mockUser";


export const initialState: CoursesState = {
    courses: [],
    confirm: false,
    userInfo: []
};

export function coursesReducer(state: CoursesState, action: CoursesAction): CoursesState {
    switch (action.type) {
        case 'ADD_COURSE':
            if (state.courses.length >= 3) return state;

            const totalCredits = state.courses.reduce((acc, curr) => acc + curr.credits, 0);
            const hasSameTeacher = state.courses.some(course => course.teacher === action.payload.teacher);

            if (totalCredits + action.payload.credits > 9 || hasSameTeacher) return state;

            const newState = { ...state, courses: [...state.courses, action.payload] };
            updateEnrolledStudents(enrolledStudents, newState.courses, action.payload.userInfo as any);
            return newState;

        case 'CONFIRM_COURSES':
            return { ...state, confirm: true };

        case 'REMOVE_COURSE':
            const updatedCourses = state.courses.filter(course => course.id !== action.payload);
            const updatedState = { ...state, courses: updatedCourses };

            updateEnrolledStudents(enrolledStudents, updatedState.courses, userData);
            return updatedState;

        default:
            return state;
    }
}