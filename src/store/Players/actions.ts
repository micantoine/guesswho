import {
  SET_CHARACTER,
  REMOVE_CHARACTER,
  SetCharacterAction,
  RemoveCharacterAction
} from './types';

export function setCharacter(id: number): SetCharacterAction {
  return { 
    type: SET_CHARACTER,
    characterId: id
  }
}

export function removeCharacter(): RemoveCharacterAction {
  return { 
    type: REMOVE_CHARACTER,
    characterId: null,
  }
}