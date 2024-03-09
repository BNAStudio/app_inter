import './BtnNav.scss'
import { FaArrowCircleRight } from "react-icons/fa";

type DetailsProps = {
  handleClick: () => void;
};

const BtnNav = ({ handleClick }: DetailsProps) => {
  return (
    <div className="link-details" onClick={handleClick}>
      <p className='btn-details-text'>Details</p>
      <button className='btn-deatils'>
        <FaArrowCircleRight />
      </button>
    </div>
  )
}

export default BtnNav