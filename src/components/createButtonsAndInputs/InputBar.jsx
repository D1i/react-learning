import React from 'react';

import createButtonAdd from '../createButtonsAndInputs/createButtonAdd.jsx';
import createButtonClear from '../createButtonsAndInputs/createButtonClear.jsx';
import SearchHints from "../searchHints/CreateSearchHintsElements.jsx"
import request from "../../services/request-response.js";
import style from "../../style.css";

class CreateInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      hints: [],
    }
  }
  closeHintsBar = () => {
    this.setState({hints: []});
  };

  selectHint = (event) => {
    this.setState({ inputValue: event.target.innerText });
    this.closeHintsBar();
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
    request(event.target.value).then(fullInfoCity => {
      let hintsList = fullInfoCity.map(({value}) => {
        return <div className={style.hintCity} key={value + "-" + Math.random()} onClick={this.selectHint}>{value}</div>;
      });
      return hintsList
    }).then(hints => {
      this.setState({hints});
    })
  };

  clearFiled = () => {
    this.setState({ inputValue: "" });
    this.closeHintsBar()
  };

  render () {
    return (
      <div className={style.inputBarContainer}>
        <input
          className={style.inputSearchCity}
          type="search"
          onChange={this.handleChange}
          value={this.state.inputValue}
          placeholder="Введите город"
        />
        {createButtonAdd(this.props.addNote, this.state.inputValue, this.clearFiled)}
        {createButtonClear(this.props.clearNoteList, this.state.closeHintsBar)}
        <SearchHints
          hints={this.state.hints}
        />
      </div>
    )
  }
}

export default CreateInputBar;