import './SummaryCredits.scss'

const SummaryCredits = () => {
    const credits = 3
    const courses = 2
    return (
        <div className='c-summary-credits'>
            <div className='c-info-credits'>
                <h3 className='credits-title'>Remaining credits:
                    <span> {credits}</span></h3>
            </div>
            <div className='c-info-courses'>
                <h3 className='courses-title'>Courses to register:</h3>
                <h2>{courses}</h2>
            </div>
        </div>
    )
}

export default SummaryCredits