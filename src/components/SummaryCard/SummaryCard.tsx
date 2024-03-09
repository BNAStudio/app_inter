import { useContext } from 'react';
import { Course } from '../../models/models';
import Amount from '../Amount/Amount'
import TagCourse from '../TagCourse/TagCourse'
import './SummaryCard.scss'
import { CoursesContext } from '../../context/CoursesContext';
import useCurrencyConverter from '../../hooks/useCurrencyConvert';

const SummaryCard = () => {
    const context = useContext(CoursesContext);

    if (!context) {
        return <div>Error: Courses context is not available</div>;
    }

    const { state, calculateTotals } = context;
    const { totalAmount } = calculateTotals();


    return (
        <div className='c-summary-card'>
            <div className='c-amount'>
                <Amount badge={"USD"} amount={totalAmount}/>
                <Amount badge={"EUR"} amount={totalAmount}/>
            </div>
            <div className='c-current-courses'>
                <h1 className='current-courses-title'>Current courses</h1>
                <div className='c-tags'>
                    {state.courses.map((course: Course) => (
                        <TagCourse key={course.id} courseName={course.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;