import React from 'react';

function createButtonClear(methodClearNoteList) {
  return (
    <button onClick={methodClearNoteList}>Очистить список городов</button>
  )
}

export default createButtonClear;