import './Summary.scss'
import SummaryCard from '../SummaryCard/SummaryCard'
import SummaryCredits from '../SummaryCredits/SummaryCredits'
import SummaryCourseDetails from '../SummaryCourseDetails/SummaryCourseDetails'

const Summary = () => {
  return (
    <div className='c-summary'>
      {false
        ? 
          <div className='c-rows'>
            <SummaryCourseDetails />
            <SummaryCourseDetails />
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