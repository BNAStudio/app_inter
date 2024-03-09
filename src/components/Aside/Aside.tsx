
import { Link } from 'react-router-dom';
import BtnNav from '../BtnNav/BtnNav';
import Profile from '../Profile/Profile';
import { user } from '../../mocks/mockUser';
import './Aside.scss'

const Aside = () => {

  return (
    <div className='aside c-aside'>
      <Profile userData={user} />
      <BtnNav />
      <Link className='link-text' to="/cart">Go to Cart</Link >
    </div>
  )
}

export default Aside;
