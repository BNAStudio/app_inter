import { useContext } from 'react';
import './Modal.scss';
import { CoursesContext } from '../../context/CoursesContext';
import { coursesInfo } from '../../mocks/mockCourses';

const Modal = () => {
    const context = useContext(CoursesContext);

    if (!context) return <div>Error: Courses context is not available</div>;

    const { setShowModal, currentCourseData } = context;

    const handleCloseModal = () => setShowModal(false);

    const currentCourse = coursesInfo.find(item => item.id === currentCourseData?.courseId);


    return (
        <div className='c-modal'>
            <div className='c-btn-close'>
                <button className='btn-close' onClick={handleCloseModal}>X</button>
            </div>
            <div className='course-name-title'>{currentCourse?.name}</div>
            {
                currentCourseData?.students.map(item => {
                    return (
                        <>
                            <p>{item.name} {item.lastname}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Modal