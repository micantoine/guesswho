import React from 'react';
import { ICharacter } from '../interfaces';
import Card from './Card';
import data from '../data.json';

interface Options {
  isSelectable: boolean;
  isFlippable: boolean;
}

interface DeckState {
  selection?: ICharacter|undefined;
}

class Deck extends React.Component<Options, DeckState> {

  constructor(props: Options) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  static defaultProps = {
    isSelectable: false,
    isFlippable: false,
  }

  state: Readonly<DeckState> = {}

  handleSelection(character: ICharacter) {
    this.setState({ selection: character});
  }

  render() {
    const { selection } = this.state;

    const list = data.map((item, key) =>
      <li key={`card${key}`}
        data-oo-col="span4 span3@sm span2@md">
        <Card character={item} {...this.props}
          onSelection={this.handleSelection}/>
      </li>
    );

    return (
      <div>
        <ul className="list-unstyle" data-oo-row="stretch">
          {list}
        </ul>
      </div>
    );
  }
}

export default Deck;