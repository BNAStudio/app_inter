
import { Link } from 'react-router-dom';
import BtnNav from '../BtnNav/BtnNav';
import Profile from '../Profile/Profile';
import { user } from '../../mocks/mockUser';
import './Aside.scss'

const Aside = () => {

  const handleOnClick = () => console.log("from Aside -> Details")

  return (
    <div className='aside c-aside'>
      <Profile userData={user} />
      <BtnNav handleClick={handleOnClick}/>
      <Link className='link-text' to="/cart">Go to Cart</Link >
    </div>
  )
}

export default Aside;
