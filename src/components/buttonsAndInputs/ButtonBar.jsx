import React from 'react';
import style from "../../style.css";

function ButtonBar(props) {

  return (
    <div>
      <button
        className={style.buttonControlCityList}
        onClick={props.handleCreate}>
        Добавить запись
      </button>
      <button
        className={style.buttonControlCityList}
        onClick={props.handleClear}>
        Очистить список записей
      </button>
    </div>
  )
}

export default ButtonBar;