import { coursesInfo } from '../../mocks/mockUser';
import { FaCheck } from "react-icons/fa";
import './RowTable.scss'

const RowTable = () => {
  return (
    <div className='c-table'>
        {true && <FaCheck />}
        <h3 className='table-course-name'>{coursesInfo.name}</h3>
        <p className='table-course-name'>{coursesInfo.teacher}</p>
        <button className='btn-add-course'>+</button>
    </div>
  )
}

export default RowTable