
import { enrolledStudents } from "../mocks/mockEnrollStudent";
import { userData } from "../mocks/mockUser";
import { CoursesAction, CoursesState } from "../types/types";
import { updateEnrolledStudents } from "../utils/updateEnrolledStudents";


export const initialState: CoursesState = {
    courses: [
    ],
    confirm: false,
    userInfo: []
};


export function coursesReducer(state: CoursesState, action: CoursesAction): CoursesState {
    switch (action.type) {
        case 'ADD_COURSE':
            // Comprobar si ya se han seleccionado 3 cursos
            if (state.courses.length >= 3) return state;

            console.log(action.payload)

            // Comprobar créditos totales y si el profesor ya está asignado
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

            // Asume que updateEnrolledStudents maneja la lógica de eliminar estudiantes del curso eliminado
            updateEnrolledStudents(enrolledStudents, updatedState.courses, userData);
            return updatedState;


        default:
            return state;
    }
}