import React from 'react';
import style from "../../style.css";


function createButtonAdd(methodAddNote, value, clearFiledFunction) {
  function functionOfAddNote() {
    methodAddNote(value);
    clearFiledFunction();
  }
  return (
    <button className={style.buttonControlCityList} onClick={functionOfAddNote}>Добавить запись</button>
  )
}

export default createButtonAdd;