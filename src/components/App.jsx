import React from 'react';

export default class InitInputAndButton extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      noteList: [],
    };
  }

  handleChange(event) {
    this.setState({inputText: event.target.value});
  }

  addNote() {
    this.setState({noteList: this.state.noteList.slice().push(this.state.inputText)});
  }

  removeNoteAll() {
    this.setState({noteList: []});
  }


  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.addNote} >Добавить</button>
        <button onClick={this.removeNoteAll} >Очистить</button>
        <ul>
          <CreateElementNoteList />
        </ul>
      </div>
    );
  }
}

class CreateElementNoteList extends React.component {
  render() {
    const noteList = this.props.noteList.slice;
    noteList.forEach((value) => {
      return (
        <li>
          {value}
        </li>
      )
    })
  }
}