import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../reducers/rootReducer';
import {fieldChecked, fieldFillIn} from "../reducers/actions";
import {IField} from '../interfaces';


const Field: React.FC<IField> = ({index, status, id, checked}) => {
    const dispatch = useDispatch();
    const newGameStart = useSelector((state: RootState) => state.game.newGameStart);
    const handleChecked = (): void => {
        if (!newGameStart) {
            // console.log(newGameStart)
            dispatch(fieldFillIn(index));
        }
        if (!checked) {
            // console.log(newGameStart)
            dispatch(fieldChecked(index));
        }
    }
    // console.count('render Field');
    let classField = 'item-a valid';
    if (checked) classField = 'item-a checked';
    let show = ''
    if (status === 'mine') {
        show = '💣'
    } else if (status !== 'valid') {
        show = status
    }
    return (
        <div className={classField} onClick={handleChecked}>
            {show}
        </div>
    );
}

function MineField() {
    const notification = useSelector((state: RootState) => state.game.fields);
    return (
        <>
            {notification.map(item => <Field key={item.id} {...item}/>)}
        </>
    );
}


export default MineField;