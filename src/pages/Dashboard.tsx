import  Aside  from '../components/Aside/Aside'
import Courses from '../components/Courses/Courses'
import Details from '../components/Details/Details'


const Dashboard = () => {
  return (
    <div className='grid'>
        <Aside />
        <Details />
        <Courses />
    </div>
  )
}

export default Dashboard