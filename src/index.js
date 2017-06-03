import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/app';
import CounterAction from './store/Actions/action'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

// Action Dispatch
function handleIncrement(){
        store.dispatch({type:'INCREMENT_WITH_HANDLER'})
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <div>
                <br/>
                Event From Index.js
                <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>Increment</button>
                <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>Decrement</button>
                <button onClick={handleIncrement}>IncrementWithHandler</button>
            </div>
        </div>
    </Provider>,
    document.getElementById("root")
);

// export default App;