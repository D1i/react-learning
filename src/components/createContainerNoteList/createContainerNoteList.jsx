import React from 'react';

function CreateElementContainerNoteList(props) {
  return (
    <ul>
      {props.noteList.map((value) =>
        <li key={value + " " + Math.random()}>
          {value}
        </li>
      ).reverse()}
    </ul>
  )
}

export default CreateElementContainerNoteList;