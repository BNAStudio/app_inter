import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import DetailCourseRow from '../DetailCourseRow/DetailCourseRow'
import { Course } from '../../types/types';
import './SummaryCourseDetails.scss';

const SummaryCourseDetails: React.FC = () => {
  const context = useContext(CoursesContext);

  if (!context) return <div>Error: Courses context is not available</div>;

  const { enrolledCourses, removeCourse } = context;

  return (
    <div className='c-courses-details'>
      {enrolledCourses.courses.map((course: Course) => (
        <DetailCourseRow
          key={course.id}
          courseInfo={course}
          onDelete={removeCourse}
        />
      ))}
    </div>
  );
};

export default SummaryCourseDetails;