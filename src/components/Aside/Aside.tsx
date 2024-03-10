
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CoursesContext } from '../../context/CoursesContext';
import BtnNav from '../BtnNav/BtnNav';
import Profile from '../Profile/Profile';
import './Aside.scss';

const Aside = () => {
  const [isConfirm, setIsConfirm] = useState(false)

  const context = useContext(CoursesContext);
  if (!context) return <div>Error: Courses context is not available</div>;

  const { dispatch, enrolledCourses } = context;

  const askToConfirm = enrolledCourses.courses.length === 3;

  const handleConfirm = () => {
    dispatch({ type: 'CONFIRM_COURSES' });
    setIsConfirm(true)
  }

  return (
    <div className='aside c-aside'>
      <Profile />
      <BtnNav />

      <div className='c-link-text'>
        {isConfirm
          ? <Link className='link-text' to="/cart">Go to Cart</Link >
          :
          <button onClick={handleConfirm} disabled={!askToConfirm || isConfirm} className={askToConfirm ? 'link-text' : 'link-text-disable'}>Confirm courses</button>
        }
      </div>
    </div>
  )
}

export default Aside;
