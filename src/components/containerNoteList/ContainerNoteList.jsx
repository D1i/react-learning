import React from 'react';
import style from "../../style.css";

function ContainerNoteList(props) {
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

export default ContainerNoteList;