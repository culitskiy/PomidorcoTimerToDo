


export default function (state,action) {
    switch (action.type) {
        case 'add':
            return [
                ...state, {
                    id: `${new Date().getTime()}${action.payload}`,
                    title: action.payload,
                    completed: false,
                    timerActive: false,
                    pomidorka: 0,
                    timer: 0
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
            stateTimer.map((item) => {
                if (item.id === action.payload) {
                    item.timerActive = !item.timerActive;
                }
                return stateTimer;
            });
            return [...stateTimer];
        case 'timer':
            let timer = [...state];
            timer.map((item) => {
                if (item.id === action.payload) {
                    item.timer = action.timer;
                }
                return timer;
            });
            return [...timer];
        case 'pomidorka':
            let pomidorka = [...state];
            pomidorka.map((item) => {
                if (item.id === action.payload) {
                    item.pomidorka = item.pomidorka + 1;
                }
                return pomidorka;
            });
            return [...pomidorka];
        default:
            return state;
    }
}