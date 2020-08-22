import React from 'react';

import createElementContainerNoteList from "./createContainerNoteList/createContainerNoteList.jsx";
import CreateFiledOfInputAndAddButtons from "./createButtonsAndInputs/createFieldOfInputAndButtons";

export default class InitInputAndButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

  clearNoteList = () => {
    this.setState({noteList: []});
  };

  render() {
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