import React from 'react';
import style from "../../style.css";


function CreateButtonBar(props) {
  function functionOfAddNote() {
    props.addNote(props.inputValue);
    props.clearFiled();
  }
  return (
    <div>
      <button
        className={style.buttonControlCityList}
        onClick={functionOfAddNote}>
        Добавить запись
      </button>
      <button
        className={style.buttonControlCityList}
        onClick={props.clearNoteList}>
        Очистить список записей
      </button>
    </div>
  )
}

export default CreateButtonBar;