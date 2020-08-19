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
    this.setState((state, props) => {
      return {
        inputText: props.event.target.value
      }
    });
  }

  addNote() {
    this.setState((state, props) =>{
      noteList: state.noteList.slice().push(props.state.inputText)
    });
  }

  removeNoteAll() {
    this.setState((state, props) => {
      noteList: []
    });
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