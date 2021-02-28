export const CHANGE_SIZE = 'CHANGE_SIZE'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const TOGGLE_PAUSE = 'game/TOGGLE_PAUSE'
export const TOGGLE_NEW_GAME = 'game/TOGGLE_NEW_GAME'
export const FIELD_CHECKED = 'game/FIELD_CHECKED'
export const FIELD_FILL_IN = 'game/FIELD_FILL_IN'

interface ChangeSizeAction {
    type: typeof CHANGE_SIZE
    payload: 'small' | 'medium' | 'big'
}

interface ChangeColorAction {
    type: typeof CHANGE_COLOR
    payload: 'green' | 'red' | 'blue'
}

interface FieldsCheckedAction {
    type: typeof FIELD_CHECKED
    payload: number
}

interface FieldFillIn {
    type: typeof FIELD_FILL_IN
    payload: number
}

interface TogglePauseAction {
    type: typeof TOGGLE_PAUSE
}

interface ToggleNewAction {
    type: typeof TOGGLE_NEW_GAME
}


export type ChatActionTypes =
    ChangeSizeAction
    | ChangeColorAction
    | TogglePauseAction
    | ToggleNewAction
    | FieldsCheckedAction
    | FieldFillIn