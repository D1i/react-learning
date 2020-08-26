import React from 'react';

import CreateButtonBar from './createButtonBar.jsx';
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
        <CreateButtonBar
          addNote={this.props.addNote}
          inputValue={this.state.inputValue}
          clearFiled={this.clearFiled}
          clearNoteList={this.props.clearNoteList}
        />
        <SearchHints
          hints={this.state.hints}
        />
      </div>
    )
  }
}

export default CreateInputBar;