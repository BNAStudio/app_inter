
import { Link } from 'react-router-dom';
import BtnNav from '../BtnNav/BtnNav';
import Profile from '../Profile/Profile';
import { userData } from '../../mocks/mockUser';
import './Aside.scss'
import { useContext, useEffect, useState } from 'react';
import { CoursesContext } from '../../context/CoursesContext';

const Aside = () => {
  const [isConfirm, setIsConfirm] = useState(false)

  const context = useContext(CoursesContext);

  if (!context) {
    return <div>Error: Courses context is not available</div>;
  }

  const { dispatch, enrolledCourses } = context;

  const askToConfirm = enrolledCourses.courses.length === 3;

  const handleConfirm = () => {
    console.log("Confirmado");
    dispatch({ type: 'CONFIRM_COURSES' });
    setIsConfirm(true)
  }

  return (
    <div className='aside c-aside'>
      <Profile userData={userData} />
      <BtnNav />
      
      {
        isConfirm
          ? (
            <>
              <Link className='link-text' to="/cart">Go to Cart</Link >
            </>
          )
          :(
            <>
              <button onClick={handleConfirm} disabled={!askToConfirm || isConfirm} className={askToConfirm ? 'link-text' : 'link-text-disable'}>Confirm courses</button>
            </>
          )
      }
    </div>
  )
}

export default Aside;
