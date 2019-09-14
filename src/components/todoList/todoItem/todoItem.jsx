import React from 'react';
import './todoItem.css';
import { Buttons } from './buttons/buttons';
import { Pomidorka } from './pomidorka/pomidorka';


export const TodoItem = ({item}) => {
    const { title, completed} = item;

    let completedItem = completed ? 'completed' : '';
    let completedItem2 = completed ? 'item-completed': 'item';

    return (
        <div className={completedItem2}>
            <div className={completedItem}>
                {title}
            </div>
            <div className='right'>
                <div>
                   
                    <Pomidorka item={item} />
                </div>
                <Buttons item={item} />
                

            </div>

        </div>
    )
}