import { UserType } from '../../types/types';
import { Avatar } from '../Avatar/Avatar';
import './Profile.scss';
import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';



const Profile = ({ userData }: { userData: UserType }) => {

    const context = useContext(CoursesContext);
    if (!context) return <div>Error: Courses context is not available</div>;
    
    const { currentUserData } = context;

    return (
        <div className='c-profile'>
            <Avatar userImg={currentUserData.img} />
            <div className='c-user-info'>
                <h3 className='name-user'>{currentUserData.name} {currentUserData.lastname}</h3>
                <p className='name-nationality'>{currentUserData.nationality}</p>
            </div>

        </div>
    )
}

export default Profile