import {
  CharacterListState,
  SET_CHARACTER_LIST,
  SetCharacterListAction
} from './types';

export function setCharacterList(list: CharacterListState) : SetCharacterListAction {
  return {
    type: SET_CHARACTER_LIST,
    characters: list,
  }
}