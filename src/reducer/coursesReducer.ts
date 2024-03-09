import { CoursesAction, CoursesState } from "../models/models";


export const initialState: CoursesState = {
    courses: [
    ]
};


export function coursesReducer(state: CoursesState, action: CoursesAction): CoursesState {
    switch (action.type) {
        case 'ADD_COURSE':
            // Comprobar si ya se han seleccionado 3 cursos
            if (state.courses.length >= 3) return state;

            // Comprobar créditos totales y si el profesor ya está asignado
            const totalCredits = state.courses.reduce((acc, curr) => acc + curr.credits, 0);
            const hasSameTeacher = state.courses.some(course => course.teacher === action.payload.teacher);

            if (totalCredits + action.payload.credits > 9 || hasSameTeacher) return state;

            return { ...state, courses: [...state.courses, action.payload] };

        case 'REMOVE_COURSE':
            return { ...state, courses: state.courses.filter(course => course.id !== action.payload) };

        default:
            return state;
    }
}