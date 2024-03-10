import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import Amount from '../Amount/Amount'
import TagCourse from '../TagCourse/TagCourse'
import useCurrencyConverter from '../../hooks/useCurrencyConvert';
import { Course } from '../../types/types';
import './SummaryCard.scss';

const SummaryCard = () => {
    const context = useContext(CoursesContext);
    const { convertTo } = useCurrencyConverter();

    if (!context) return <div>Error: Courses context is not available</div>;

    const { enrolledCourses, calculateTotals } = context;
    const { totalAmount } = calculateTotals();

    const totalAmountEUR = convertTo(totalAmount, 'USD');

    return (
        <div className='c-summary-card'>
            <div className='c-amount'>
                <Amount badge={"USD"} amount={totalAmount}/>
                <Amount badge={"EUR"} amount={Math.trunc(totalAmountEUR)}/>
            </div>
            <div className='c-current-courses'>
                <h1 className='current-courses-title'>Current courses</h1>
                
                <div className='c-tags'>
                    {enrolledCourses.courses.map((course: Course) => (
                        <TagCourse key={course.id} courseName={course.name} idCourse={course.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;