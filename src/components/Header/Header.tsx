import { useState } from "react";
import { userData } from "../../mocks/mockUser";
import { getFormattedDate } from "../../utils/utilDate";
import { encodeMsg } from "../../mocks/encodeMsg";
import './Header.scss';


const Header = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('USD');

    const handleClick = (currency: string) => {
        console.log("can u resolve? ", encodeMsg);
        setTimeout(() => { console.clear() }, 1500)
        setSelectedCurrency(currency);
    };

    return (
        <div className='c-info-user'>
            <p className='user-name'>Welcome {userData.name}!</p>
            <p className='current-date'>{getFormattedDate()}</p>
            <div className='c-badge'>
                <button
                    onClick={() => handleClick("USD")}
                    className={selectedCurrency === "USD" ? 'selected' : ''}
                >
                    USD
                </button>
                <button
                    onClick={() => handleClick("EUR")}
                    className={selectedCurrency === "EUR" ? 'selected' : ''}
                >
                    EUR
                </button>
            </div>
        </div>
    );
};

export default Header;