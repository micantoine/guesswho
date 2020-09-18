import {
  SET_CHARACTER_LIST,
  SET_VIEW,
  SetCharacterListAction,
  SetViewAction,
  ViewEnum
} from './types';
import { ICharacter } from '../../interfaces';


export function setCharacterList(list: Array<ICharacter>) : SetCharacterListAction {
  return {
    type: SET_CHARACTER_LIST,
    characters: list,
  }
}

export function setView(view: ViewEnum) : SetViewAction {
  return {
    type: SET_VIEW,
    view,
  }
}