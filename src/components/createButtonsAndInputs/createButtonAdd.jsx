import React from 'react';

function createButtonAdd(methodAddNote, value, clearFiledFunction) {
  function funcrionOfAddNote() {
    methodAddNote(value);
    clearFiledFunction()
  }
  return (
    <button onClick={funcrionOfAddNote}>Добавить запись</button>
  )
}

export default createButtonAdd;