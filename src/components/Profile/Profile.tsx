import { UserType } from '../../types/types';
import { Avatar } from '../Avatar/Avatar';
import { userData } from '../../mocks/mockUser';
import './Profile.scss';



const Profile = ({ userData }: { userData: UserType }) => {
    return (
        <div className='c-profile'>
            <Avatar userImg={userData.img} />
            <div className='c-user-info'>
                <h3 className='name-user'>{userData.name} {userData.lastname}</h3>
                <p className='name-nationality'>{userData.nationality}</p>
            </div>

        </div>
    )
}

export default Profile