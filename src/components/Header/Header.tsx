import './Header.scss'
import { getFormattedDate } from "../../utils/utilDate";

const Header = () => {

    const handleClick = (currency: string) => {
        console.log("from header click", currency)
    }

    return (
            <div className='c-info-user'>
                <p className='user-name'>User-Name</p>
                <p className='current-date'>{getFormattedDate()}</p>
                <div className='c-badge'>
                    <button onClick={() => handleClick("USD")}>USD</button>
                    <button onClick={() => handleClick("EUR")}>EUR</button>
                </div>

        </div>
    )
}

export default Header;
