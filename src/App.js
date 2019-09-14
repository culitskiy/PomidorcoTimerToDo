import React, {useReducer, useEffect} from 'react';
import reducer from './reducer';
import './App.css';
import {Context} from './context';
import { Input } from './components/input/input';
import { TodoList } from './components/todoList/todoList';
import { TimerPomidor } from './components/timerPomidor/timerPomidor';



function App() {

  const initialState = [{
    timer:25*60,
    timerRest: 5*60,
    idTicket: '',
    timerActive: false,
    timerRestActive: false
  }];
  
  if (JSON.parse(window.localStorage.getItem('todo')) == null) {
    localStorage.setItem('todo', JSON.stringify(initialState));
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
          <TimerPomidor data={state}/>
          <Input></Input>
          <TodoList></TodoList>
        </div>
      </div>
    </Context.Provider>
    
  );
}

export default App;
