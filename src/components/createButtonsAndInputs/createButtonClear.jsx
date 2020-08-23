import React from 'react';

function createButtonClear(methodClearNoteList) {
  return (
    <button onClick={methodClearNoteList}>Очистить список записей</button>
  )
}

export default createButtonClear;