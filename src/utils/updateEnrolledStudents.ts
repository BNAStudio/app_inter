import { EnrolledCourse, SelectedCourse, Student } from "../types/types";

/**
 * Updates the enrolled students list by adding a student to each selected course,
 * if the student is not already enrolled in the course.
 * @param enrolledStudents - The current list of courses with enrolled students.
 * @param selectedCourses - The list of courses the student has recently selected.
 * @param studentData - The data of the student to be added to the courses.
 * @returns The updated list of enrolled courses with the student added where necessary.
 */
export function updateEnrolledStudents(enrolledStudents: EnrolledCourse[], selectedCourses: SelectedCourse[], studentData: Student): EnrolledCourse[] {
    selectedCourses.forEach(course => {
        addStudentToCourseIfNotEnrolled(enrolledStudents, course, studentData);
    });
    return enrolledStudents;
}

/**
* Adds a student to a course if they are not already enrolled in that course.
* @param enrolledStudents - The current list of courses with enrolled students.
* @param course - The course to which the student may be added.
* @param student - The student to be added to the course.
*/
function addStudentToCourseIfNotEnrolled(enrolledStudents: EnrolledCourse[], course: SelectedCourse, student: Student) {
    const courseIndex = findCourseIndex(enrolledStudents, course.id);

    if (courseIndex !== -1 && !isStudentEnrolled(enrolledStudents[courseIndex], student.id)) enrolledStudents[courseIndex].students.push(student);
}

/**
 * Finds the index of a course in the enrolled courses list based on the course ID.
 * @param enrolledCourses - The list of enrolled courses.
 * @param courseId - The ID of the course to find.
 * @returns The index of the course in the enrolled courses list, or -1 if not found.
 */
function findCourseIndex(enrolledCourses: EnrolledCourse[], courseId: number): number {
    return enrolledCourses.findIndex(enrolledCourse => enrolledCourse.courseId === courseId);
}

/**
* Checks if a student is already enrolled in a given course.
* @param course - The course to check for the student's enrollment.
* @param studentId - The ID of the student.
* @returns True if the student is enrolled in the course, false otherwise.
*/
function isStudentEnrolled(course: EnrolledCourse, studentId: number): boolean {
    return course.students.some(student => student.id === studentId);
}