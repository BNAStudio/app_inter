import { AmountProps } from '../../models/models'
import './Amount.scss'


const Amount = ({badge}: AmountProps) => {
    const amount = {
        value: 150
    }

    return (
        <div className='c-amount-info'>
            <div className='amount-title'>{badge} Amount</div>
            <div className='amount-value'>$ {amount.value}</div>
        </div>
    )
}

export default Amount