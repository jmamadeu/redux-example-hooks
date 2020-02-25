import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as CourseActions from "../../store/actions/course";

function Sidebar() {
  const modules = useSelector(state => state.course.modules);
  const dispatch = useDispatch();

  return (
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong> {module.title} </strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {" "}
                {lesson.title}
                <button
                  onClick={() =>
                    dispatch(CourseActions.toggleLesson(module, lesson))
                  }>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
