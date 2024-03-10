import { useContext } from 'react'
import { CoursesContext } from '../../context/CoursesContext'
import SummaryCard from '../SummaryCard/SummaryCard'
import SummaryCredits from '../SummaryCredits/SummaryCredits'
import SummaryCourseDetails from '../SummaryCourseDetails/SummaryCourseDetails'
import './Summary.scss';

const Summary = () => {
  const context = useContext(CoursesContext);

  if (!context) return <div>Error: Courses context is not available</div>;

  const { showDetails, enrolledCourses } = context;
  const isEmpty = enrolledCourses.courses.length === 0;

  return (
    <div className='c-summary'>
      {(showDetails && !isEmpty)
        ? 
          <div className='c-rows'>
            <SummaryCourseDetails />
          </div>
        : <SummaryCard />
      }
      <SummaryCredits />
    </div>
  )
}

export default Summary