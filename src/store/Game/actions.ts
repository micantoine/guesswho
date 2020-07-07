import {
  SET_CHARACTER_LIST,
  SetCharacterListAction
} from './types';
import { ICharacter } from '../../interfaces';


export function setCharacterList(list: Array<ICharacter>) : SetCharacterListAction {
  return {
    type: SET_CHARACTER_LIST,
    characters: list,
  }
}