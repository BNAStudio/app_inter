import { UserType } from '../../models/userModel';
import { Avatar } from './Avatar';
import './Profile.scss';
import { user } from './mockUser';



const Profile = ({ userData }: { userData: UserType }) => {
    return (
        <div className='c-profile'>
            <Avatar userImg={userData.img} />
            <div className='c-user-info'>
                <h3 className='name-user'>{userData.name} {userData.lastname}</h3>
                <p className='name-nationality'>{user.nationality}</p>
            </div>
        </div>
    )
}

export default Profile