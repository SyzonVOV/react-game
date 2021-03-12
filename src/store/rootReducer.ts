import {combineReducers} from 'redux';
import {gameReducer} from "./reducers/gameReducer";


export const reducer = combineReducers({
    game: gameReducer,
});

export type RootState = ReturnType<typeof reducer>
