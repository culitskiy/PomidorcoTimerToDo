import React from 'react';
import './timerPomidor.css';
import { TimerRest } from './timerRest/timerRest';
import { Timer } from './timer/timer';


export const TimerPomidor = () => {
    return (
        <div className='pomidorka'>
            Работа
            <Timer />
            Отдых
            <TimerRest/>
        </div>
    )
}