import { coursesInfo } from '../../mocks/mockUser'
import './DetailCourseRow.scss'

const DetailCourseRow = () => {
  const handleClick = () => console.log("Delete course")

  return (
    <div className='c-details-row'>

      <div className='c-course-name'>
        <h3 className='course-name-title'>Courses name:</h3>
        <p className='course-name'>{coursesInfo.name}</p>
      </div>

      <div className='c-course-details'>
        <div className='c-teacher-details'>
          <h3 className='detail-title'>Teacher:
            <span className='detail-value'> {coursesInfo.teacher}</span>
          </h3>
        </div>

        <div className='c-details'>
          <h3 className='detail-title'>Credits:
            <span className='detail-value'> {coursesInfo.credits}</span>
          </h3>
          <h3 className='detail-title'>Price:
            <span className='detail-value'> {coursesInfo.price}</span>
          </h3>
        </div>
      </div>

    <button className='btn-delete-course' onClick={() => handleClick()}>X</button>

    </div>
  )
}

export default DetailCourseRow