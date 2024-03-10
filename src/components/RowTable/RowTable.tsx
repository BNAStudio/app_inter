
import { RowTableProps } from "../../types/types";
import { FaCheck } from "react-icons/fa";
import './RowTable.scss'

const RowTable: React.FC<RowTableProps> = ({ courseInfo, onAddCourse }) => {
  return (
    <div className='c-table' onClick={() => onAddCourse(courseInfo.id)}>
      <FaCheck className={`icon-check ${courseInfo.isSelected ? '' : 'invisible'}`} />
      <h3 className='table-course-name'>{courseInfo.name}</h3>
      <p className='table-course-name'>{courseInfo.teacher}</p>
      <div className='c-btn-add'>
        <button
          className='btn-add-course'
          disabled={courseInfo.isSelected}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default RowTable;