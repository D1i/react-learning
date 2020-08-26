import React from 'react';
import ContainerNoteList from "./containerNoteList/ContainerNoteList.jsx";
import InputBar from "./buttonsAndInputs/InputBar";
import style from "style.css"

class InitInputAndButton extends React.Component {
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
    return (
      <div className={style.mainComponentContainer}>
        <InputBar
          functionOfAddNote={this.addNote}
          addNote={this.addNote}
          handleClear={this.clearNoteList}
        />
        <ContainerNoteList
          noteList={this.state.noteList}
        />
      </div>
    )
  }
}

export default InitInputAndButton;