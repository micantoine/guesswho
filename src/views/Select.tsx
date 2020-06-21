import React from 'react';
import Deck from '../components/Deck';

function SelectView() {
  return (
    <div className="container">
      <h1>Select Your Character</h1>
      <Deck isSelectable={true} />
    </div>
  );
}

export default SelectView;
