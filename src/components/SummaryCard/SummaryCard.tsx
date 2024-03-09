import Amount from '../Amount/Amount'
import TagCourse from '../TagCourse/TagCourse'
import './SummaryCard.scss'

const SummaryCard = () => {
    return (
        <div className='c-summary-card'>
            <div className='c-amount'>
                <Amount badge={"USD"} />
                <Amount badge={"EUR"} />
            </div>
            <div className='c-current-courses'>
                <h1 className='current-courses-title'>Current courses</h1>
                <div className='c-tags'>
                    {/* mapping tags*/}
                    <TagCourse />
                    <TagCourse />
                    <TagCourse />
                </div>
            </div>
        </div>
    )
}

export default SummaryCard