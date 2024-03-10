import { useEffect, useReducer, useState } from "react";
import { coursesReducer, initialState } from "../reducer/coursesReducer";
import { Course, CoursesProviderProps, EnrolledCourse } from "../types/types";
import { CoursesContext } from "./CoursesContext";
import { updateEnrolledStudents } from "../utils/updateEnrolledStudents";
import { userData } from "../mocks/mockUser";
import { enrolledStudents } from "../mocks/mockEnrollStudent";

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
    // array de cursos del usuario
    const [enrolledCourses, dispatch] = useReducer(coursesReducer, initialState);
    // array de cursos completo
    const [enrolledStudentsState, setEnrolledStudentsState] = useState(enrolledStudents);
    // valida para mostrar detalles
    const [showDetails, setShowDetails] = useState<boolean | undefined>(undefined);
    // renderiza el modal
    const [showModal, setShowModal] = useState<boolean | undefined>(false);
    // obtiene el id del curso actual - TagCourse
    const [currentCourseId, setCurrentCourseId] = useState<number | undefined>(undefined)
    // obtiene el 
    const [currentCourseData, setCurrentCourseData] = useState<EnrolledCourse>();


    const addCourse = (course: Course) => {
        dispatch({ type: 'ADD_COURSE', payload: course });
    };

    const removeCourse = (courseId: number) => {
        dispatch({ type: 'REMOVE_COURSE', payload: courseId });

        // Actualiza enrolledStudentsState
        const updatedEnrolledStudents = enrolledStudentsState.map(enrolled => {
            if (enrolled.courseId === courseId) {
                return {
                    ...enrolled,
                    students: enrolled.students.filter(student => student.id !== userData.id)
                };
            }
            return enrolled;
        });

        setEnrolledStudentsState(updatedEnrolledStudents);
    };

    const calculateTotals = () => {
        const totalCredits = enrolledCourses.courses.reduce((acc, course) => acc + course.credits, 0);
        const totalAmount = enrolledCourses.courses.reduce((acc, course) => acc + course.price, 0);

        return { totalCredits, totalAmount };
    };

    useEffect(() => {
        // Actualizar currentCourseData cuando cambia currentCourseId o enrolledStudentsState
        const currentCourse = enrolledStudentsState.find(item => item.courseId === currentCourseId);
        setCurrentCourseData(currentCourse);
    }, [currentCourseId, enrolledStudentsState]);


    useEffect(() => {
        // Asegurarse de que enrolledStudentsState se actualice cuando enrolledCourses.courses cambie
        const updatedEnrolledStudents = updateEnrolledStudents(enrolledStudentsState, enrolledCourses.courses, userData);
        setEnrolledStudentsState(updatedEnrolledStudents);
    }, [enrolledCourses.courses]);

    return (
        <CoursesContext.Provider value={{ dispatch, enrolledCourses, enrolledStudentsState, addCourse, removeCourse, setShowDetails, showDetails, calculateTotals, showModal, setShowModal, setCurrentCourseId, currentCourseData }}>
            {children}
        </CoursesContext.Provider>
    );
};