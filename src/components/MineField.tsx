import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/rootReducer';
import {actions} from "../store/reducers/actions";
import {IField} from '../interfaces';
import {useTypedSelector} from "../hooks/useTypedSelector";


const Field: React.FC<IField> = ({index, status, id, checked,style}) => {
    const dispatch = useDispatch();
    //const newGameStart = useTypedSelector((state) => state.game.newGameStart, shallowEqual); <= shallowEqual if we want to make an object of different values
    const newGameStart = useTypedSelector((state) => state.game.newGameStart);
    const handleChecked = (): void => {
        if (newGameStart) {
            dispatch(actions.fieldFillIn(index));
        }
        if (!checked && !newGameStart) {
            dispatch(actions.fieldChecked(index));
        }
    }
    let classField = 'item-a ' + style;
    //if (checked) classField = 'item-a checked';
    let show: number | string = ''
    if (status === 'mine') {
        show = '💣'
    } else if (status !== 'empty') {
        show = status
    }

    return (
        <div className={classField} onClick={handleChecked} data-index={index}>
            {show}
        </div>
    );
}

function MineField() {
    const fields = useSelector((state: RootState) => state.game.fields);
    const endGame = useSelector((state: RootState) => state.game.endGame);
    return (
        <>
            {endGame ? <h2>Game over</h2> : fields.map(item => <Field key={item.id} {...item}/>)}
        </>
    );
}


export default MineField;