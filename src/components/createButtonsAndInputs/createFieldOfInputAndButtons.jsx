import React from 'react';

import createButtonAdd from '../createButtonsAndInputs/createButtonAdd.jsx';
import createButtonClear from '../createButtonsAndInputs/createButtonClear.jsx';

class CreateFiledOfInputAndAddButtons extends React.Component {
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

  render () {

    return (
      <div>
        <input
        type="text"
        onChange={this.handleChange}
        value={this.state.inputValue} />
        {createButtonAdd(this.props.addNote, this.state.inputValue, this.clearFiled)}
        {createButtonClear(this.props.clearNoteList)}
      </div>
    )
  }
}

export default CreateFiledOfInputAndAddButtons;