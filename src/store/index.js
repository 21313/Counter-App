import {createStore} from 'redux';
import {combineReducers} from 'redux';

import incrementCounter from './Reducers/incrementCounter';
import decrementCounter from './Reducers/decrementCounter';

const rootReducers = combineReducers({
    incrementCounter,
    decrementCounter
});

let store = createStore(rootReducers);

store.subscribe(()=>
console.log(store.getState()));

export default store;

