import React from 'react';
import style from "../../style.css";

function createButtonClear(methodClearNoteList) {
  return (
    <button className={style.buttonControlCityList} onClick={methodClearNoteList}>Очистить список записей</button>
  )
}

export default createButtonClear;