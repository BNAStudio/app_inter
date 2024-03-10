import { useContext, useEffect } from "react";
import { TagCourseProps } from "../../types/types";
import { CoursesContext } from "../../context/CoursesContext";
import "./TagCourse.scss";

const TagCourse: React.FC<TagCourseProps> = ({ courseName, idCourse }) => {

  const context = useContext(CoursesContext);

  if (!context) return <div>Error: Courses context is not available</div>;

  const { enrolledCourses, setShowModal, setCurrentCourseId } = context;

  const enableModal = enrolledCourses.confirm;

  const handleClick = () => {
    setShowModal(true)
    setCurrentCourseId(idCourse)
  }

  return (
      <div onClick={handleClick} className={enableModal ? "c-tag-active" : "c-tag-disable"}>{courseName}</div>
  );
};

export default TagCourse;