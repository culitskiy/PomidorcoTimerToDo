
export default function (state ,action) {
    switch (action.type) {
        case 'add':
            return [
                ...state, {
                    id: `${new Date().getTime()}${action.payload}`,
                    title: action.payload,
                    completed: false,
                    timerActive: false,
                    pomidorka: 0,
                }
            ];
        case 'delete':
            let newState = [...state];
            newState.map((item, index) => {
                if (item.id === action.payload) {
                    newState.splice(index, 1);
                }
                return newState;
            });
            return [...newState];
        case 'completed':
            let newState2 = [...state]
            newState2.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                }
                return newState2;
            });

            return [...newState2];
        case 'timerActive':
            let stateTimer = [...state];
           
            stateTimer[0].timerActive = !stateTimer[0].timerActive;
            stateTimer[0].idTicket = action.payload ? action.payload : stateTimer[0].idTicket;
            stateTimer[0].timer = action.newTimer ? action.newTimer : stateTimer[0].timer;
            return [...stateTimer];
        case 'timerRestActive':
            let stateTimerRest = [...state];
            
            stateTimerRest[0].timerRestActive = !stateTimerRest[0].timerRestActive;
            stateTimerRest[0].timerRest = action.newTimerRest ? action.newTimerRest : stateTimerRest[0].timerRest;
            return [...stateTimerRest];    
        case 'timer':
            let timer = [...state];
           
            timer[0].timer-- ;
            return [...timer];
        case 'timerRest':
            let timerRest = [...state];
            
            timerRest[0].timerRest-- ;
            return [...timerRest];
        case 'pomidorka':
            let pomidorka = [...state];
            pomidorka.map((item, index) => {
                if (item.id === pomidorka[0].idTicket && index !== 0) {
                    item.pomidorka++;
                }
                
            });
            return [...pomidorka];
            
        default:
            return state;
    }
}