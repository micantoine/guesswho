import { SET_CHARACTER, SetCharacterAction } from './types';

export function setCharacter(id: number): SetCharacterAction {
  return { 
    type: SET_CHARACTER,
    characterId: id
  }
}