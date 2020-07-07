import {
  CharacterListState,
  SET_CHARACTER_LIST,
  GameActionTypes
} from './types';

const initialGameState: CharacterListState = {
  characters: [],
};

export function gameReducer(
  state = initialGameState,
  action: GameActionTypes
): CharacterListState {
  switch (action.type) {
    case SET_CHARACTER_LIST:
      // return {
      //   ...state,
      //   ...action.characters,
      // };
      return Object.assign({}, state, {
        characters: action.characters
      });
    default:
      return state;
  }
}
