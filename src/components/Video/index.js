import React from "react";
import { useSelector } from "react-redux";

function Video() {
  const activeModule = useSelector(state => state.course.activeModule);
  const activeLesson = useSelector(state => state.course.activeLesson);
  return (
    <>
      <strong> Módulo {activeModule.title} </strong>
      <span>Aula {activeLesson.title} </span>
    </>
  );
}

export default Video;
