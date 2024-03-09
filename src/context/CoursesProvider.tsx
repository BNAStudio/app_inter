import { useReducer, useState } from "react";
import { coursesReducer, initialState } from "../reducer/coursesReducer";
import { Course, CoursesProviderProps } from "../models/models";
import { CoursesContext } from "./CoursesContext";


export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(coursesReducer, initialState);
    const [showDetails, setShowDetails] = useState<boolean | undefined>(undefined);

    const addCourse = (course: Course) => {
        dispatch({ type: 'ADD_COURSE', payload: course });
    };

    const removeCourse = (courseId: number) => {
        dispatch({ type: 'REMOVE_COURSE', payload: courseId });
    };

    // Calcula el total de créditos y el monto basado en los cursos seleccionados
    const calculateTotals = () => {
        const totalCredits = state.courses.reduce((acc, course) => acc + course.credits, 0);
        const totalAmount = state.courses.reduce((acc, course) => acc + course.price, 0);

        return { totalCredits, totalAmount };
    };

    return (
        <CoursesContext.Provider value={{ state, addCourse, removeCourse, setShowDetails,  showDetails, calculateTotals}}>
            {children}
        </CoursesContext.Provider>
    );
};