import { useContext } from 'react';
import DetailCourseRow from '../DetailCourseRow/DetailCourseRow'
import { CoursesContext } from '../../context/CoursesContext';
import { Course } from '../../models/models';
import './SummaryCourseDetails.scss';

const SummaryCourseDetails: React.FC = () => {
  const context = useContext(CoursesContext);


  if (!context) return <div>Error: Courses context is not available</div>;

  const { state, removeCourse } = context;

  return (
    <div className='c-courses-details'>
      {state.courses.map((course: Course) => (
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