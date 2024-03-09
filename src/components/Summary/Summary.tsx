import './Summary.scss'
import SummaryCard from '../SummaryCard/SummaryCard'
import SummaryCredits from '../SummaryCredits/SummaryCredits'
import SummaryCourseDetails from '../SummaryCourseDetails/SummaryCourseDetails'
import { useContext } from 'react'
import { CoursesContext } from '../../context/CoursesContext'

const Summary = () => {
  const context = useContext(CoursesContext);

  if (!context) return <div>Error: Courses context is not available</div>;

  const { showDetails } = context;

  return (
    <div className='c-summary'>
      {showDetails
        ? 
          <div className='c-rows'>
            <SummaryCourseDetails />
          </div>
        : 
          <SummaryCard />
      }
      <SummaryCredits />
    </div>
  )
}

export default Summary