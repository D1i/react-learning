import React from 'react';


function createNote(textNote) {
  return (
    <li key={textNote + " " + Math.random()}>
      {textNote}
    </li>
  )
}

export default createNote;