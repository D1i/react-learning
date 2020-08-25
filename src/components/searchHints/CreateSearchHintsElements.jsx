import React from 'react';
import request from "../../services/request-response.js";
import style from "../../style.css";

class SearchHints extends React.Component {
  render() {
    return (
      <div className={style.hintsCityContainer}>
        {this.props.hints}
      </div>
    )
  }
}


export default SearchHints;