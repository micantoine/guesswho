export const SET_CHARACTER = "SET_CHARACTER";

export interface PlayersState {
  characterId: number|null;
}

export interface SetCharacterAction {
  type: typeof SET_CHARACTER;
  characterId: number;
}

export type PlayersActionTypes = SetCharacterAction
