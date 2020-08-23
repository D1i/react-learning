import React from 'react';

import createButtonAdd from '../createButtonsAndInputs/createButtonAdd.jsx';
import createButtonClear from '../createButtonsAndInputs/createButtonClear.jsx';
import HintsContainer from "../searchHints/CreateSearchHintsElements.jsx"

class CreateInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    }
  }
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  clearFiled = () => {
    this.setState({ inputValue: "" });
  };
  setInputValue = (event) => {
    this.setState({inputValue: event.value})
  };

  render () {
    return (
      <div>
        <input
        type="search"
        onChange={this.handleChange}
        value={this.state.inputValue}
        id="address-input"
        />
        {createButtonAdd(this.props.addNote, this.state.inputValue, this.clearFiled)}
        {createButtonClear(this.props.clearNoteList)}
        <br/>
        <HintsContainer
          inputValue={this.state.inputValue}
          setInputValue={this.props.setInputValue}
        />
      </div>
    )
  }
}

export default CreateInputBar;