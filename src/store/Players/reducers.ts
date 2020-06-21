import { 
  SET_CHARACTER,
  REMOVE_CHARACTER,
  PlayersState,
  PlayersActionTypes
} from './types';

const initialState: PlayersState = {
  characterId: null
};

export function playersReducer(
  state = initialState,
  action: PlayersActionTypes
): PlayersState {

  switch (action.type) {
    case SET_CHARACTER:
    case REMOVE_CHARACTER:
      return {
        characterId: action.characterId
      }
    default:
      return state
  }
}