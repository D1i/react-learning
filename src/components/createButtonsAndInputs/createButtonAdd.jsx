import React from 'react';

function createButtonAdd(methodAddNote, value, clearFiledFunction) {
  function funcrionOfAddNote() {
    methodAddNote(value);
    clearFiledFunction()
  }
  return (
    <button onClick={funcrionOfAddNote}>Добавить город в список</button>
  )
}

export default createButtonAdd;