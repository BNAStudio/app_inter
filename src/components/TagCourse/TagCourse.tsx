import { TagCourseProps } from "../../models/models";
import "./TagCourse.scss";

const TagCourse: React.FC<TagCourseProps> = ({ courseName }) => {
  return (
    <div className="c-tag">{courseName}</div>
  );
};

export default TagCourse;