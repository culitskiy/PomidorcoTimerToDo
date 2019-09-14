import React, {useContext, useEffect} from 'react';
import {Context} from '../../../context';

export const TimerRest = () => {

    const {state, dispatch} = useContext(Context);
    const {timerRest, timerRestActive} = state[0];


    useEffect( () => {
        var interval;
        const stop = () => {
            clearInterval(interval);
        };
        const start = () => {
            
            interval = setInterval(() => {
                dispatch({
                    type: 'timerRest',
                });
            }, 1000);
        };

        if (timerRestActive) {
            start();
        } else if (timerRestActive === false) {
            stop();
        }
        if (timerRest === 0 && timerRestActive === true){
            stop();
           
            dispatch({
                type: 'timerRestActive',
            });
            dispatch({
                type: 'timerActive',
                newTimer: 25*60
            });

            setTimeout(() => alert('Иди работай'),100); 
            
        }
        return () => {
            clearInterval(interval);

        }
    });

    return (
        <div>
             {`${(timerRest-timerRest % 60)/60 < 10 ? 0 : ''}${(timerRest-timerRest % 60)/60}
            : ${timerRest % 60 < 10 ? 0 : ''}${timerRest % 60}`}
        </div>
    )
}