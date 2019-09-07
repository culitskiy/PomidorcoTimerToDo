import React,{useState, useContext} from 'react';
import './input.css';
import {Context} from '../../context';


export const Input = () => {

    const [inputValue, setInputValue] = useState('');
    const {dispatch} = useContext(Context);

    const changeInput = (event) => {
        setInputValue(event.target.value);
    };

    const addTask = (event) => {
        if (event.key === 'Enter') {
            dispatch({
                type: 'add',
                payload: inputValue
            });
            setInputValue('');
        }
    };

    return (
        <>
       <input className='input' onKeyPress={addTask} onChange={changeInput} value={inputValue} placeholder='Введи задачу'></input>
       <button className='button'>OK</button>
       </>
    )
}