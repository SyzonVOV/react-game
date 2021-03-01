import {combineReducers} from 'redux';
import {createFields, fillInField} from "../utils/functionField";
import { ChatActionTypes } from './actions';


const initialGame = {
    fields: createFields('beginner'),
    pause: false,
    newGameStart: false,
    settings: {
        difficulty: 'beginner',
        color: 'green'
    }
}

type InitialState = typeof initialGame;

const gameReducer = (state:InitialState = initialGame, action: ChatActionTypes) => {
    switch (action.type) {

        case "game/FIELD_CHECKED": {

            return {
                ...state,
                fields: state.fields.map(field => {
                    if (field.index === action.payload) {
                        field.checked = true
                    }
                    return field;
                })
            };
        }
        case "game/FIELD_FILL_IN": {
            const [fields, mines] = fillInField(action.payload, state.settings.difficulty, state.fields)
            return {
                ...state,
                fields,
                newGameStart: true
            };
        }

        default:
            return state;
    }
};


export const reducer = combineReducers({
    game: gameReducer,
});

export type RootState = ReturnType<typeof reducer>

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = anecdote => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

//const initialState = anecdotesAtStart.map(asObject);

/*const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_VOTE:
      return state.map(anecdote =>
        anecdote.id !== action.payload.id
          ? anecdote
          : { ...anecdote, votes: action.payload.votes},
      );

    case ADD_BLOG:
      return state.concat(action.payload);

    case INIT_BLOG:
      return action.payload;

    default:
      return state;
  }
};

const notificationReducer = (state = {message: null, timerID: null}, action) => {
  switch (action.type) {
    case SHOW_NOTIF:
      return {...state, message: action.payload};

    case HIDE_NOTIF:
      return {...state, message: null};

    case DEL_TIMER:
      return {...state, timerID: null};

    case INIT_TIMER:
      return {...state, timerID: action.payload};

    default:
      return state;
  }
};

const userReducer = (state = {user: null}, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.payload};

    default:
      return state;
  }
};*/