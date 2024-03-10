import { useContext } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import { coursesInfo } from '../../mocks/mockCourses';
import './Modal.scss';

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
            <div className='modal-content'>
                <div className='modal-course-name-title'>Enrolled estudents - {currentCourse?.name}</div>
                <ol className='enrolled-students'>
                    {
                        currentCourseData?.students.map(item => {
                            return (
                                <>
                                    <li>{item.name} {item.lastname}</li>
                                </>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Modal