export interface IField {
    index: number,
    status: 'mine'|'flag'|'empty'|number,
    style: string,
    readonly id: string,
    checked: boolean
}

//===============  EXAMPLES ==================
/*
type Nullable<T> = null | T;

const init = {
    age: 10,
    name: 'Ivan',
    info: null as Nullable<InfoType>
    photo: null as PhotoType | null
}






*/
