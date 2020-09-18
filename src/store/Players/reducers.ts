import { 
  SET_CHARACTER,
  REMOVE_CHARACTER,
  CharacterState,
  PlayersActionTypes
} from './types';

const initialCharacterState: CharacterState = {
  characterId: null
};

export function playersReducer(
  state = initialCharacterState,
  action: PlayersActionTypes
): CharacterState {

  switch (action.type) {
    case SET_CHARACTER:
    case REMOVE_CHARACTER:
      return Object.assign({}, state, {
        characterId: action.characterId
      });
    default:
      return state;
  }
}
