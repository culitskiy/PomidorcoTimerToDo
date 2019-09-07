import React, {useReducer, useEffect} from 'react';
import reducer from './reducer';
import './App.css';
import {Context} from './context';
import { Input } from './components/input/input';
import { TodoList } from './components/todoList/todoList';



function App() {

  if (JSON.parse(window.localStorage.getItem('todo')) == null) {
    localStorage.setItem('todo', JSON.stringify([]));
  }

  const [state, dispatch] = useReducer(reducer,
    JSON.parse(window.localStorage.getItem('todo'))
    
  );

  useEffect(() => {
    window.localStorage.setItem('todo', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{dispatch, state}}>
      <div className='app'>
        <div className='todo'>
          <Input></Input>
          <TodoList></TodoList>
        </div>
      </div>
    </Context.Provider>
    
  );
}

export default App;
