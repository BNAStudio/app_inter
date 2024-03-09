
import Details from '../Courses/Details';
import Profile from '../Profile/Profile';
import { user } from '../Profile/mockUser';
import './Aside.scss'

const Aside = () => {

  const handleOnClick = () => console.log("from Aside -> Details")

  return (
    <div className='aside c-aside'>
      <Profile userData={user} />
      <Details handleClick={handleOnClick}/>
    </div>
  )
}

export default Aside;
