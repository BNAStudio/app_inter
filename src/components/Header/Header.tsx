import './Header.scss'
import { getFormattedDate } from "../../utils/utilDate";

const Header = () => {

    const handleClick = () => {
        console.log("from header click")
    }

    return (
            <div className='c-info-user'>
                <p className='user-name'>User-Name</p>
                <p className='current-date'>{getFormattedDate()}</p>
                <div className='c-badge'>
                    <button onClick={handleClick}>USD</button>
                    <button onClick={handleClick}>EUR</button>
                </div>

        </div>
    )
}

export default Header;
