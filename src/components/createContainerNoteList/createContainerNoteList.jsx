import React from 'react';
import createNote from './createNote.jsx';

function createElementContainerNoteList(noteList) {
  return (
    <ul>
      {noteList.map((value) =>
        createNote(value)
      ).reverse()}
    </ul>
  )
}

export default createElementContainerNoteList;