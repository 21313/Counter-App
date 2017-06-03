import CounterAction from '../Actions/action';

const INITIAL_STATE = {
    decrementState: 0
}

export default function decrementCounter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CounterAction.DECREMENT:
            return Object.assign({}, state, { decrementState: state.decrementState - 1 });
        case CounterAction.DECREMENT_WITH_VALUE:
            return Object.assign({}, state, { decrementState: state.decrementState - action.value });
        default:
            return state;
    }
}