import { useContext } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { CoursesContext } from '../../context/CoursesContext';
import './BtnNav.scss'

const BtnNav = () => {
  const context = useContext(CoursesContext);
  if (!context) return <div>Error: Courses context is not available</div>;

  const { enrolledCourses, setShowDetails, showDetails } = context;

  const handleClick = () => setShowDetails(!showDetails)

  const isDisableBtn = enrolledCourses.courses.length === 0;

  return (
    <div className="link-details">
      <p className={'btn-details-text'}>{showDetails ? "Show details" : "Show summary"}</p>
      <div className='c-btn'>
        <button onClick={handleClick} className={isDisableBtn ? 'btn-details-disable' : 'btn-deatils'} disabled={isDisableBtn} >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  )
}

export default BtnNav;