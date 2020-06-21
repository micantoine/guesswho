import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

import Deck from '../components/Deck';

function SelectView(props: AppState) {
  console.log(props);
  return (
    <div className="container">
      <h1>Select Your Character</h1>
      {props.characterId}
      <Deck isSelectable={true} />
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    characterId: state.characterId
  }
}

export default connect(mapStateToProps)(SelectView);
