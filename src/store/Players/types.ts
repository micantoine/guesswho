export const SET_CHARACTER = "SET_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export interface CharacterState {
  characterId: number|null;
}

export interface SetCharacterAction {
  type: typeof SET_CHARACTER;
  characterId: number;
}
export interface RemoveCharacterAction {
  type: typeof REMOVE_CHARACTER;
  characterId: null;
}

export type PlayersActionTypes = SetCharacterAction | RemoveCharacterAction;
