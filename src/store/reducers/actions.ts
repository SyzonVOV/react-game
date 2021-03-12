export const actions= {
  fieldChecked:function (index: number) {
    return ({
      type: 'game/FIELD_CHECKED',
      payload: index
    } as const)
  },

  fieldFillIn: function (index: number) {
    return ({
      type: 'game/FIELD_FILL_IN',
      payload: index
    } as const)
  }
}
type ActionPropType<T> = T extends {[key: string]: infer U} ? U : never;
export type ChatActionTypes = ReturnType<ActionPropType<typeof actions>>

/*type FieldCheckedType = ReturnType<typeof fieldChecked>
type FieldFillInType = ReturnType<typeof fieldFillIn>

export type ChatActionTypes =
    ReturnType<typeof fieldChecked>
    | ReturnType<typeof fieldFillIn>*/
