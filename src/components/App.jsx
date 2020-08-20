import React from 'react';

export default class InitInputAndButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      noteList: [],
    };
  }

  handleChange = (event) => this.setState({inputText: event.target.value });


  addNote = () => {
    if (this.state.inputText === "") {
      return;
    }
    this.setState((state, props) => ({
      noteList: [...state.noteList, state.inputText]
    }));
    this.setState((state, props) => ({
      inputText: ""
    }))
  };

  clearNoteList = () => {
    this.setState((state, props) => ({
      noteList: []
    }));
  };


  render() {
    const inputText = this.state.inputText;
    const noteList = this.state.noteList;

  return (
    <div>
      <input
        type="text"
        onChange={this.handleChange}
        value={inputText}
      />
      <button onClick={this.addNote}>ADD</button>
      <button onClick={this.clearNoteList}>CLEAR</button>
        <CreateElementContainerNoteLists noteList={noteList} />
    </div>
  )
}

}

class CreateElementContainerNoteLists extends React.Component {

  render() {
    return (
      <ul>
        {this.props.noteList.map((value) =>
        createNote(value)
        ).reverse()}
      </ul>
    )
  }
}

function createNote(textNote) {
    return (
      <li>
        {textNote}
      </li>
    )
}