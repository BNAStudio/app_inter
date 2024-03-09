import { AmountProps } from '../../models/models'
import './Amount.scss'


const Amount = ({badge, amount}: AmountProps) => {

    return (
        <div className='c-amount-info'>
            <div className='amount-title'>{badge} Amount</div>
            <div className='amount-value'>$ {amount}</div>
        </div>
    )
}

export default Amount