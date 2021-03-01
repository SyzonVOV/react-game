
export function fieldChecked(index: number) {
  return ({
    type: 'game/FIELD_CHECKED',
    payload: index
  } as const)
}
//type FieldCheckedType = ReturnType<typeof fieldChecked>

export function fieldFillIn(index: number) {
  return ({
    type: 'game/FIELD_FILL_IN',
    payload: index
  } as const)
}
//type FieldFillInType = ReturnType<typeof fieldFillIn>

export type ChatActionTypes =
    ReturnType<typeof fieldChecked>
    | ReturnType<typeof fieldFillIn>
