import { useContext } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { CoursesContext } from '../../context/CoursesContext';
import './BtnNav.scss'

const BtnNav = () => {
  const context = useContext(CoursesContext);


  if (!context) return <div>Error: Courses context is not available</div>;

  const { setShowDetails,  showDetails } = context;

  const handleClick = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div className="link-details" onClick={handleClick}>
      <p className='btn-details-text'>{showDetails ? "Show summary" : "Show details"}</p>
      <button className='btn-deatils'>
        <FaArrowCircleRight />
      </button>
    </div>
  )
}

export default BtnNav