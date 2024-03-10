import { AvatarProps } from '../../types/types'
import './Avatar.scss'

export const Avatar = ({ userImg }: AvatarProps) => {
    return (
        <div className='c-img-user'>
            <img className='img-user' src={userImg} alt='user_img' />
        </div>
    )
}
