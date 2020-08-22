import React from 'react';

function createButtonAdd(methodAddNote, value) {
  function funcrionOfAddNote() {
    methodAddNote(value)
  }
  return (
    <button onClick={funcrionOfAddNote}>Добавить город в список</button>
  )
}

export default createButtonAdd;