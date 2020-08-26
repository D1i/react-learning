import React from 'react';
import style from "../../style.css";

function HintBar(props) {
    return (
      <div className={style.hintsCityContainer}>
        {props.hints}
      </div>
    )
}

export default HintBar;