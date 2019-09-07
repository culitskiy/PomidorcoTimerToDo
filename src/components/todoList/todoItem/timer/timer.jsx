import React, {useContext, useEffect} from 'react';
import {Context} from '../../../../context';

export const Timer = ({item}) => {

    const {id,timerActive} = item;
    let itemTimer = item.timer;
    const {dispatch} = useContext(Context);

    useEffect(() => {
        var interval;
        const stop = () => {
            clearInterval(interval);
        };
        const start = () => {
            interval = setInterval(() => {
                dispatch({
                    type: 'timer',
                    payload: id,
                    timer: item.timer + 1
                });

            }, 1000);
        };

        if (timerActive) {
            start();
        } else if (timerActive === false) {
            stop();
        }
        
        return () => {
            clearInterval(interval);

        }
    });

    return (
        <div>
            {`${(itemTimer-itemTimer % 60)/60 < 10 ? 0 : ''}${(itemTimer-itemTimer % 60)/60}
            :${itemTimer % 60 < 10 ? 0 : ''}${itemTimer % 60}`}
        </div>
    )
}