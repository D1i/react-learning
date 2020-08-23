import React from 'react';

import CreateElementContainerNoteList from "./createContainerNoteList/CreateContainerNoteList.jsx";
import CreateInputBar from "./createButtonsAndInputs/InputBar";

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
        <CreateInputBar
          functionOfAddNote={this.addNote}
          addNote={this.addNote}
          clearNoteList={this.clearNoteList}
        />
        <CreateElementContainerNoteList
          noteList={this.state.noteList}
        />
      </div>
    )
  }
}