
import { FaCheck } from "react-icons/fa";
import './RowTable.scss'
import { RowTableProps } from "../../models/models";

const RowTable: React.FC<RowTableProps> = ({ courseInfo, onAddCourse }) => {
  return (
    <div className='c-table'>
      {courseInfo.isSelected && <FaCheck />}
      <h3 className='table-course-name'>{courseInfo.name}</h3>
      <p className='table-course-name'>{courseInfo.teacher}</p>
      <button 
        className='btn-add-course'
        onClick={() => onAddCourse(courseInfo.id)}
        disabled={courseInfo.isSelected}
      >
        +
      </button>
    </div>
  );
};

export default RowTable;