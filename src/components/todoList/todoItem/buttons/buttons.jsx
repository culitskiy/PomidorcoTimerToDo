import React, {useContext} from 'react';
import './buttons.css';
import {Context} from '../../../../context';

export const Buttons = ({item}) => {

    const {id} = item;

    const {dispatch, state} = useContext(Context);

    const onTimerPomidorka = () => {

        if ((item.id === state[0].idTicket || state[0].idTicket === '') && state[0].timerRestActive === false) {
            dispatch({
                type: 'timerActive',
                payload: id
            });
        } else if(item.id !== state[0].idTicket && state[0].timerRestActive === false){
            dispatch({
                type: 'timerActive',
                payload: id,
                newTimer: 25*60
            });
        } else {
            return ;
        }

    };

    const deleteItem = () => {
        dispatch({
            type: 'delete',
            payload: id
        });
    };
   
    const onCompleted = () => {
        
            dispatch({
                type: 'completed',
                payload: id
            });
    };

    return(
        
            <div className='icons'>
                <i onClick={onTimerPomidorka} className="far fa-clock"></i>
                <i onClick={onCompleted} className="fas fa-check"></i>
                <i onClick={deleteItem} className="far fa-times-circle"></i>
            </div>
        
    )
}