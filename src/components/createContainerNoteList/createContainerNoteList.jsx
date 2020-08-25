import React from 'react';
import style from "../../style.css";

function CreateElementContainerNoteList(props) {
  return (
    <ul className={style.cityListContainer}>
      {props.noteList.map((value) =>
        <li key={value + " " + Math.random()}>
          {value}
        </li>
      ).reverse()}
    </ul>
  )
}

export default CreateElementContainerNoteList;