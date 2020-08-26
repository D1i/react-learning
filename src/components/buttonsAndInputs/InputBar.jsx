import React from 'react';

import ButtonBar from './ButtonBar.jsx';
import HintBar from "../searchHints/HintBar.jsx"
import request from "../../services/request-response.js";
import style from "../../style.css";

class InputBar extends React.Component {
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
      return fullInfoCity.map(({value}) => {
        return (<div
          className={style.hintCity}
          key={value + "-" + Math.random()}
          onClick={this.selectHint}>
          {value}
          </div>)
      });
    }).then(hints => {
      this.setState({hints});
    })
  };

  clearFiled = () => {
    this.setState({ inputValue: "" });
    this.closeHintsBar()
  };

  handleCreate = () => {
    this.props.addNote(this.state.inputValue);
    this.clearFiled();
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
        <ButtonBar
          handleCreate={this.handleCreate}
          handleClear={this.props.handleClear}
        />
        <HintBar
          hints={this.state.hints}
        />
      </div>
    )
  }
}

export default InputBar;