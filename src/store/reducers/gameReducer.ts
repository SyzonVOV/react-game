import {checkEndGame, checkField, createFields, fillInField} from "../../utils/functionField";
import {ChatActionTypes} from './actions';


const initialGame = {
    fields: createFields('beginner'),
    pause: false,
    newGameStart: true,
    endGame: false,
    settings: {
        difficulty: 'beginner',
        color: 'green'
    }
}

type InitialGame = typeof initialGame;
type InitialState = InitialGame & {
    settings: {
        difficulty: 'beginner' | 'intermediate' | 'advanced'
    }
}

export const gameReducer = (state: InitialState = initialGame as InitialState, action: ChatActionTypes): InitialState => {
    switch (action.type) {

        case "game/FIELD_CHECKED": {
            let result = {}
            const endGame = checkEndGame(action.payload, state.fields);

            if (endGame) result = {endGame}
            else {
                const fields = checkField(action.payload, state.fields, state.settings.difficulty)
                result = {fields}
            }

            return {
                ...state,
                ...result,
            };
        }
        case "game/FIELD_FILL_IN": {
            let [fields, minesGrids] = fillInField(action.payload, state.settings.difficulty, state.fields);
            fields = checkField(action.payload, fields, state.settings.difficulty);
            return {
                ...state,
                fields,
                newGameStart: false
            };
        }

        default:
            return state;
    }
};
