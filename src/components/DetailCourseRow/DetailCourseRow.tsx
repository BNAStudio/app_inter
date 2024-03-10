
import { useContext } from 'react';
import { DetailCourseRowProps } from '../../types/types';
import './DetailCourseRow.scss'
import { CoursesContext } from '../../context/CoursesContext';

const DetailCourseRow: React.FC<DetailCourseRowProps> = ({ courseInfo }) => {
    const context = useContext(CoursesContext);

    if (!context) return <div>Error: Courses context is not available</div>;

    const { removeCourse } = context;

    const handleRemoveCourse = () => {
        removeCourse(courseInfo.id);
    }

    return (
        <div className='c-details-row'>
            <div className='c-course-name'>
                <h3 className='course-name-title'>Course name:</h3>
                <p className='course-name'>{courseInfo.name}</p>
            </div>

            <div className='c-course-details'>
                <div className='c-teacher-details'>
                    <h3 className='detail-title'>Teacher:
                        <span className='detail-value'> {courseInfo.teacher}</span>
                    </h3>
                </div>

                <div className='c-details'>
                    <h3 className='detail-title'>Credits:
                        <span className='detail-value'> {courseInfo.credits}</span>
                    </h3>
                    <h3 className='detail-title'>Price:
                        <span className='detail-value'> {courseInfo.price}</span>
                    </h3>
                </div>
            </div>

            <button className='btn-delete-course' onClick={handleRemoveCourse}>X</button>
        </div>
    );
};

export default DetailCourseRow;