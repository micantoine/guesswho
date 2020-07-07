import React from 'react';
import { connect } from 'react-redux';
import { AppState } from './store';
import { ViewEnum } from './store/Game/types';
import { setCharacterList } from './store/Game/actions';
import jsonData from './data.json';

import SelectView from './views/Select';
import GuessView from './views/Guess';
import './App.scss';

interface AppProps {
  view: ViewEnum, 
  setCharacterList: typeof setCharacterList
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    const list = jsonData.map((item, key) => {
      return {
        ...item,
        id: key + 1
      }
    });
    this.props.setCharacterList(list);
  }

  render() {
    const displayView = () => {
      switch (this.props.view) {
        case "GUESS":
          return <GuessView />
        case "SELECT":
          return <SelectView />
      }
    }

    return (
      <div>
        {displayView()}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    view: state.game.view
  }
}


export default connect(
  mapStateToProps,
  { setCharacterList }
)(App);
