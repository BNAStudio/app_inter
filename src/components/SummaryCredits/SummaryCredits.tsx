import { useContext } from 'react';
import './SummaryCredits.scss'
import { CoursesContext } from '../../context/CoursesContext';
import { userData } from '../../mocks/mockUser';

const SummaryCredits = () => {
    const context = useContext(CoursesContext);

    if (!context) return <div>Error: Courses context is not available</div>;

    const { enrolledCourses, calculateTotals } = context;

    const { totalCredits } = calculateTotals();

    const remainingCredits = userData.credits - totalCredits;
    const registeredCourses = enrolledCourses.courses.length;

    return (
        <div className='c-summary-credits'>
            <div className='c-info-credits'>
                <h3 className='credits-title'>Remaining credits:
                    <span> {remainingCredits}</span></h3>
            </div>
            <div className='c-info-courses'>
                <h3 className='courses-title'>Enrolled course:</h3>
                <h2>{registeredCourses}</h2>
            </div>
        </div>
    );
};

export default SummaryCredits