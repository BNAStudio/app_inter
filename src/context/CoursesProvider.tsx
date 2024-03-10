import { useEffect, useReducer, useState } from "react";
import { CoursesContext } from "./CoursesContext";
import { coursesReducer, initialState } from "../reducer/coursesReducer";
import { updateEnrolledStudents } from "../utils/updateEnrolledStudents";
import { convertUserToStudent } from "../utils/convertToStuden";
import { Course, CoursesProviderProps, EnrolledCourse, SelectedCourse, UserType } from "../types/types";
import { userData } from "../mocks/mockUser";
import { enrolledStudents } from "../mocks/mockEnrollStudent";

export const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
    const [enrolledCourses, dispatch] = useReducer(coursesReducer, initialState);
    const [enrolledStudentsState, setEnrolledStudentsState] = useState(enrolledStudents);
    const [showDetails, setShowDetails] = useState<boolean | undefined>(undefined);
    const [showModal, setShowModal] = useState<boolean | undefined>(false);
    const [currentCourseId, setCurrentCourseId] = useState<number | undefined>(undefined)
    const [currentCourseData, setCurrentCourseData] = useState<EnrolledCourse>();
    const [currentUserData, setCurrentUserData] = useState<UserType>(userData);

    const addCourse = (course: Course) => dispatch({ type: 'ADD_COURSE', payload: course });

    const removeCourse = (courseId: number) => {
        dispatch({ type: 'REMOVE_COURSE', payload: courseId });
        
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

    const updateUserData =(newUserData: Partial<UserType>) => {
        setCurrentUserData({
            ...userData,
            ...newUserData
        });
    };

    useEffect(() => {
        const currentCourse = enrolledStudentsState.find(item => item.courseId === currentCourseId);
        setCurrentCourseData(currentCourse);
    }, [currentCourseId, enrolledStudentsState]);


    useEffect(() => {
        const studentData = convertUserToStudent(currentUserData);
    
        const selectedCourses: SelectedCourse[] = [];
        const updatedEnrolledStudents = updateEnrolledStudents(enrolledStudentsState, selectedCourses, studentData);
    
        setEnrolledStudentsState(updatedEnrolledStudents);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUserData]);

    const valueProvider = { 
        dispatch, 
        enrolledCourses, 
        enrolledStudentsState, 
        addCourse, 
        removeCourse, 
        setShowDetails, 
        showDetails, 
        calculateTotals, 
        showModal, 
        setShowModal, 
        setCurrentCourseId, 
        currentCourseData,
        currentUserData,
        updateUserData
    }

    return <CoursesContext.Provider value={valueProvider}>{children}</CoursesContext.Provider>;
};
