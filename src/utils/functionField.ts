import {IField} from "../interfaces";
import {v4 as uuidv4} from "uuid";

export interface ISize {
    width: number,
    height: number
}

const setSize = (difficulty: string): ISize => {
    if (difficulty === 'intermediate') return {width: 16, height: 16}
    if (difficulty === 'advanced') return {width: 16, height: 30}
    return {width: 10, height: 10}
}

const setMinesQuantity = (difficulty: string): number => {
    if (difficulty === 'intermediate') return 40
    if (difficulty === 'advanced') return 99
    return 10
}

const setMinesIndex = (quantity: number, max: number, clicked: number): number[] => {
    let mineIndexes: number[] = []
    do {
        let randomIndex = Math.floor(Math.random() * max);
        if (!mineIndexes.includes(randomIndex) && randomIndex !== clicked) mineIndexes.push(randomIndex)
    } while (mineIndexes.length < quantity);
    return mineIndexes
}

const setFieldWithMines = (field: IField[], mines: number[]): IField[] => {
    return field.map((currentValue, currentIndex) => {
        if (mines.includes(currentIndex)) currentValue.status = 'mine';
        return currentValue
    })
}

const setFieldWithNumbers = (fieldWithMines: IField[], width: number, height: number) => {
    let field = [...fieldWithMines]
    for (let i = 0; i < field.length; i++) {
        let total = 0
        const isLeftEdge = (i % width === 0)
        const isRightEdge = (i % width === width - 1)

        if (field[i].status !== 'mine') {
            if (i > 0 && !isLeftEdge && field[i - 1].status === 'mine') total++
            if (i > width - 1 && !isRightEdge && field[i + 1 - width].status === 'mine') total++
            if (i > width - 1 && field[i - width].status === 'mine') total++
            if (i > width && !isLeftEdge && field[i - 1 - width].status === 'mine') total++
            if (i < width * height - 1 && !isRightEdge && field[i + 1].status === 'mine') total++
            if (i < width * height - width && !isLeftEdge && field[i - 1 + width].status === 'mine') total++
            if (i < width * height - width - 1 && !isRightEdge && field[i + 1 + width].status === 'mine') total++
            if (i < width * height - width && field[i + width].status === 'mine') total++
            if (total) field[i].status = total.toString()
        }
        // if (field[i].status !== 'mine') {
        //     if (field[i-width+1] && field[i-width+1].status === 'mine') total++;
        //     if (field[i-width] && field[i-width].status === 'mine') total++;
        //     if (field[i-width-1] && field[i-width-1].status === 'mine') total++;
        //     if (field[i-1] && field[i-1].status === 'mine') total++;
        //     if (field[i+1] && field[i+1].status === 'mine') total++;
        //     if (field[i+width-1] && field[i+width-1].status === 'mine') total++;
        //     if (field[i+width] && field[i+width].status === 'mine') total++;
        //     if (field[i+width+1] && field[i+width+1].status === 'mine') total++;
        //         if (total) field[i].status = total.toString()
        //     }
    }
    return field
}

export const createFields = (difficulty: string): IField[] => {
    const {width, height} = setSize(difficulty);
    return Array(width * height).fill('').map((item, index) => {
        return {
            id: uuidv4(),
            index,
            status: 'valid',
            checked: false
        }
    })
}

export const fillInField = (clickedIndex: number, difficulty: string, field: IField[]): [IField[], number[]] => {
    const minesQuantity = setMinesQuantity(difficulty);
    const {width, height} = setSize(difficulty);
    const fieldLength = field.length;
    const mineIndexes: number[] = setMinesIndex(minesQuantity, fieldLength, clickedIndex);
    const fieldWithMines = setFieldWithMines(field, mineIndexes);
    const completedField = setFieldWithNumbers(fieldWithMines, width, height)
    // const completedField = fieldWithMines
    console.log(completedField.reduce((previousValue, currentValue) => {
        if (currentValue.status === 'mine') {
            return previousValue + 1
        } else return previousValue
    }, 0))
    return [completedField, mineIndexes]
}

