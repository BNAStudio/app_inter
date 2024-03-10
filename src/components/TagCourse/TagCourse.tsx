import { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext";
import { TagCourseProps } from "../../types/types";
import "./TagCourse.scss";

const TagCourse: React.FC<TagCourseProps> = ({ courseName, idCourse }) => {

  const context = useContext(CoursesContext);
  if (!context) return <div>Error: Courses context is not available</div>;

  const { enrolledCourses, setShowModal, setCurrentCourseId } = context;
  const enableModal = enrolledCourses.confirm;

  const handleClick = () => {
    if(!enableModal) return
    setShowModal(true)
    setCurrentCourseId(idCourse)
  }

  return (
      <div onClick={handleClick} className={enableModal ? "c-tag-active" : "c-tag-disable"}>{courseName}</div>
  );
};

export default TagCourse;