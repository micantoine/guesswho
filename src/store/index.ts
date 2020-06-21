import { createStore } from 'redux';
import { playersReducer } from "./Players/reducers";

export type AppState = ReturnType<typeof playersReducer>;

export const store = createStore(playersReducer);