import {
  CharacterListState,
  SET_CHARACTER_LIST,
  SET_VIEW,
  GameActionTypes,
  ViewEnum
} from './types';

interface GameReducerState extends CharacterListState {
  view: ViewEnum
}

export function gameReducer(
  state: GameReducerState = {
    characters: [],
    view: ViewEnum.Select,
  },
  action: GameActionTypes
): GameReducerState {
  switch (action.type) {
    case SET_CHARACTER_LIST:
      return {
        ...state,
        characters: action.characters,
      };
    case SET_VIEW:
      return {
        ...state,
        view: action.view
      } 
    default:
      return state;
  }
}
