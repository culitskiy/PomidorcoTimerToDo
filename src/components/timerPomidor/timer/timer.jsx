import React, {useContext, useEffect} from 'react';
import {Context} from '../../../context';

export const Timer = () => {
   
    const {state,dispatch} = useContext(Context);
    const {timer, idTicket, timerActive, timerRestActive} = state[0];

    useEffect( () => {
        var interval;
        const stop = () => {
            clearInterval(interval);
        };
        const start = () => {
            interval = setInterval(() => {
                dispatch({
                    type: 'timer',
                });

            }, 1000);
        };

        if (timerActive) {
            start();
        } else if (timerActive === false) {
            stop();
        }
        if (timer === 0 && timerActive === true && timerRestActive === false){
            stop();
           
            dispatch({
                type: 'timerActive',
            });
            dispatch({
                type: 'pomidorka',
            });
            setTimeout(() => {
                let bigRest = state.map((item, index) => {
                    if(index !== 0 && item.id === idTicket && item.pomidorka % 4 === 0 && item.pomidorka !== 0){
                        return true;
                    } else{ return false; }
                });
                if (bigRest.some((item) => item === true)){
                    dispatch({
                        type: 'timerRestActive',
                        newTimerRest: 15*60
                    });
                }else{
                    dispatch({
                        type: 'timerRestActive',
                        newTimerRest: 5 *60
                    });
                }
            },500)
            
            setTimeout(() => alert('Отдохни!'),600); 
           
        }
        return () => {
            clearInterval(interval);

        }
    });
    

    return (
        <div>
            
            {`${(timer-timer % 60)/60 < 10 ? 0 : ''}${(timer-timer % 60)/60}
            : ${timer % 60 < 10 ? 0 : ''}${timer % 60}`}
        </div>
    )
}