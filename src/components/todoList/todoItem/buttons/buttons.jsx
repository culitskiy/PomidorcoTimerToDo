import React, {useContext} from 'react';
import './buttons.css';
import {Context} from '../../../../context';

export const Buttons = ({item}) => {

    const {id, timerActive} = item;

    const {dispatch, state} = useContext(Context);

    const onTimerPomidorka = () => {

        if (state.every((item) => item.timerActive === false) ||
            (timerActive === true)) {
            dispatch({
                type: 'timerActive',
                payload: id
            });
        } else {
            return alert("Сделай сначала то что начал!!!")
        }
    };

    const deleteItem = () => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }
   
    const onCompleted = () => {
        
            dispatch({
                type: 'completed',
                payload: id
            });
        
    }

    return(
        
            <div className='icons'>
                <i onClick={onTimerPomidorka} className="far fa-clock"></i>
                <i onClick={onCompleted} className="fas fa-check"></i>
                <i onClick={deleteItem} className="far fa-times-circle"></i>
            </div>
        
    )
}