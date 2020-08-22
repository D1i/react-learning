import React from 'react';

import createElementContainerNoteList from "./createContainerNoteList/createContainerNoteList.jsx";
import CreateFiledOfInputAndAddButtons from "./createButtonsAndInputs/createFieldOfInput";

export default class InitInputAndButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      noteList: [],
    };
  }

  addNote = (value) => {
    if (value === "") {
      return;
    }
    this.setState((state, props) => ({
      noteList: [...state.noteList, value]
    }));
    this.setState({inputText: ""})
  };

  clearNoteList = () => {
    this.setState({noteList: []});
  };

  render() {
    const inputText = this.state.inputText;
    const noteList = this.state.noteList;
    return (
      <div>
        <CreateFiledOfInputAndAddButtons
          functionOfAddNote={this.addNote}
          addNote={this.addNote}
          clearNoteList={this.clearNoteList}
        />
        {createElementContainerNoteList(this.state.noteList)}
      </div>
    )
  }
}