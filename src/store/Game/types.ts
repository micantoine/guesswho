import { ICharacter } from '../../interfaces';

export const SET_CHARACTER_LIST = "SET_CHARACTER_LIST";
export const SET_VIEW = "SET_VIEW";

export interface CharacterListState {
  characters: Array<ICharacter>;
}
export interface SetCharacterListAction {
  type: typeof SET_CHARACTER_LIST;
  characters: Array<ICharacter>;
}

export enum ViewEnum {
  Guess = "GUESS",
  Select = "SELECT",
}

export interface SetViewAction {
  type: typeof SET_VIEW;
  view: ViewEnum;
}

export type GameActionTypes = SetCharacterListAction|SetViewAction;