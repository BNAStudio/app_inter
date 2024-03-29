import { useContext } from 'react';
import { CoursesContext } from '../context/CoursesContext';
import Aside from '../components/Aside/Aside'
import Courses from '../components/Courses/Courses'
import Details from '../components/Details/Details'
import Modal from '../components/Modal/Modal';


const Dashboard = () => {
  const context = useContext(CoursesContext);
  if (!context) return <div>Error: Courses context is not available</div>;

  const { showModal } = context;

  return (
    <div className='grid'>
      <Aside />
      <Details />
      <Courses />
      {showModal && <Modal />}
    </div >
  )
}

export default Dashboard