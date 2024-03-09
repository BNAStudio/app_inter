import './Avatar.scss'

type AvatarProps = {
    userImg: string;
}

export const Avatar = ({ userImg }: AvatarProps) => {
    return (
        <div className='c-img-user'>
            <img className='img-user' src={userImg} alt='user_img' />
        </div>
    )
}
