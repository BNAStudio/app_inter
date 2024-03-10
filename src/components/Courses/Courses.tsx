import RowTable from '../RowTable/RowTable'
import { Course } from '../../types/types';
import { coursesInfo } from '../../mocks/mockCourses';
import './Courses.scss'
import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';

const Courses = () => {

  const context = useContext(CoursesContext);

  if (!context) {
    return <div>Error: Courses context is not available</div>;
  }

  const { enrolledCourses, addCourse, currentUserData } = context;

  const handleAddCourse = (courseId: number) => {
    const selectedCourse = coursesInfo.find(course => course.id === courseId);
    if (selectedCourse) {
      addCourse({ ...selectedCourse, isSelected: true,  userInfo: currentUserData});
    }
  };

  // Fusiona el mock con el estado para reflejar los cursos seleccionados
  const mergedCourses = coursesInfo.map(course => {
    const isSelected = enrolledCourses.courses.some(selectedCourse => selectedCourse.id === course.id);
    return { ...course, isSelected };
  });

  return (
    <div className='courses c-courses'>
      {mergedCourses.map((course: Course) => (
        <RowTable key={course.id} courseInfo={course} onAddCourse={handleAddCourse} />
      ))}
    </div>
  );
};

export default Courses;