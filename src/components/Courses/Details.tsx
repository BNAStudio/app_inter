import './Details.scss'

type DetailsProps = {
  handleClick: () => void;
};

const Details = ({ handleClick }: DetailsProps) => {
  return (
    <div className="link-details" onClick={handleClick}>
      <p className='btn-details-text'>Details</p>
      <button className='btn-deatils'>{">"}</button>
    </div>
  )
}

export default Details