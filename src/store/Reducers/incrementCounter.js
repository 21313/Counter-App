import CounterAction from '../Actions/action';


const INITIAL_STATE = {
    incrementState : 0,
}
export default function incrementCounter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CounterAction.INCREMENT:
            return Object.assign({},state,{incrementState : state.incrementState + 1});
        case CounterAction.INCREMENT_WITH_VALUE:
            return Object.assign({},state,{incrementState : state.incrementState + action.value});
        case CounterAction.INCREMENT_WITH_HANDLER:
            return Object.assign({},state,{incrementState : state.incrementState + 1})
        default:
            return state;
    }
}