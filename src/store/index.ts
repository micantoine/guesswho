import { createStore } from 'redux';
import { playersReducer } from "./Players/reducers";

const store = createStore(playersReducer);

export default store;