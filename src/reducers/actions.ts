import {ChatActionTypes, FIELD_CHECKED, FIELD_FILL_IN} from './action-types';

export function fieldChecked(index: number): ChatActionTypes {
  return {
    type: FIELD_CHECKED,
    payload: index
  }
}

export function fieldFillIn(index: number): ChatActionTypes {
  return {
    type: FIELD_FILL_IN,
    payload: index
  }
}
