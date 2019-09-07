import React, {useContext} from 'react';
import './todoList.css';
import {Context} from '../../context';
import { TodoItem } from './todoItem/todoItem';

export const TodoList = () => {

    const { state } = useContext(Context);

    const items = state.map((item) => {
        return(
            <TodoItem  item={item} key={`${new Date().getTime()}${item.title}`}/>
        )
    })

    return(
        <div className='todo-list'>
            {items}
        </div> 
    )
}