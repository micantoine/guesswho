import React from 'react';
import { connect } from 'react-redux';
import { setCharacterList } from './store/Game/actions';
import jsonData from './data.json';

import SelectView from './views/Select';
import './App.scss';

interface AppProps {
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
    return (
      <div>
        <SelectView />
      </div>
    )
  }
}

export default connect(
  null,
  { setCharacterList }
)(App);
