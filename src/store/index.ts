import { createStore, combineReducers } from 'redux';
import { gameReducer } from "./Game/reducers";
import { playersReducer } from "./Players/reducers";

export type GameState = ReturnType<typeof gameReducer>;
export type PlayerState = ReturnType<typeof playersReducer>;

export type AppState = {
  game: GameState,
  players: PlayerState
}

const appReducer = combineReducers({
  game: gameReducer,
  players: playersReducer,
});


export const store = createStore(appReducer);