import { ICharacter } from '../../interfaces';

export const SET_CHARACTER_LIST = "SET_CHARACTER_LIST";

export interface CharacterListState {
  characters: Array<ICharacter>;
}

export interface SetCharacterListAction {
  type: typeof SET_CHARACTER_LIST;
  characters: CharacterListState;
}

export type GameActionTypes = SetCharacterListAction;