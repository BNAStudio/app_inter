import { useContext } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { CoursesContext } from '../../context/CoursesContext';
import './BtnNav.scss'

const BtnNav = () => {
  const context = useContext(CoursesContext);

  if (!context) return <div>Error: Courses context is not available</div>;

  const { enrolledCourses, setShowDetails,  showDetails } = context;
  
  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  const isDisableBtn = enrolledCourses.courses.length === 0;

  return (
    <div className="link-details" onClick={handleClick}>
      <p className={'btn-details-text'}>{showDetails ? "Show details" : "Show summary"}</p>
      <button className={isDisableBtn ? 'btn-details-disable': 'btn-deatils'} disabled={isDisableBtn} >
        <FaArrowCircleRight />
      </button>
    </div>
  )
}

export default BtnNav;