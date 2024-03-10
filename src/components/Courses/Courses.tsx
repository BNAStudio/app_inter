import { useContext } from 'react';
import RowTable from '../RowTable/RowTable'
import { CoursesContext } from '../../context/CoursesContext';
import { Course } from '../../types/types';
import { coursesInfo } from '../../mocks/mockCourses';
import './Courses.scss'

const Courses = () => {

  const context = useContext(CoursesContext);
  if (!context) return <div>Error: Courses context is not available</div>;
  
  const { enrolledCourses, addCourse, currentUserData } = context;

  const handleAddCourse = (courseId: number) => {
    const selectedCourse = coursesInfo.find(course => course.id === courseId);
    if (selectedCourse) {
      addCourse({ ...selectedCourse, isSelected: true,  userInfo: currentUserData});
    }
  };

  // Merge the mock with the state to reflect the selected courses
  const mergedCourses = coursesInfo.map(course => {
    const isSelected = enrolledCourses.courses.some(selectedCourse => selectedCourse.id === course.id);
    return { ...course, isSelected };
  });

  return (
    <div className='courses c-courses'>
      {mergedCourses.map((course: Course) => <RowTable key={course.id} courseInfo={course} onAddCourse={handleAddCourse} />)}
    </div>
  );
};

export default Courses;