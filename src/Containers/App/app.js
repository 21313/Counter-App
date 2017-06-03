import React from 'react';
import { connect } from 'react-redux';
import incrementCounter from '../../store/Reducers/incrementCounter';
import decrementCounter from '../../store/Reducers/decrementCounter';
import CounterAction from '../../store/Actions/action';
import Counter from '../../Components/counter/Counter';

function mapStateToProps(state) {
    return {
        incCount : state.incrementCounter.incrementState,
        decCount : state.decrementCounter.decrementState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch( { type : CounterAction.INCREMENT}),
        incrementWithValue: () => dispatch( {type : CounterAction.INCREMENT_WITH_VALUE, value : 3} ),
        decrement: () => dispatch({ type: CounterAction.DECREMENT}),
        decrementWithValue: () => dispatch( { type : CounterAction.DECREMENT_WITH_VALUE, value : 3} ),
        incrementAgain: function () {
        console.log("Increment value");
        return dispatch({ type: CounterAction.INCREMENT_WITH_HANDLER})
    },
        incrementWitUserInput : function (val){
            return dispatch({type : CounterAction.INCREMENT_WITH_VALUE,value:val})
        }
    
    }
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    updateCounter(value){
        this.props.incrementWitUserInput(value)
    }
    handleClick(){
        this.props.incrementWitUserInput(this.state.count)
    }
    handleChanges(event){
        this.setState({count : parseInt(event.target.value)})
    }
    render() {
        return (
            <div>
                <Counter counter={this.props.incCount + this.props.decCount}
                         update={this.updateCounter.bind(this)} />
               {/*<h1>Counter App {this.props.incCount + this.props.decCount}</h1>*/}
               <h2>Text Field Input : {this.state.count}</h2>
                <br />
                Event From App
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.incrementWithValue}>IncrementWith3</button>
                <button onClick={this.props.decrement}>Decrement</button>
                <button onClick={this.props.decrementWithValue}>DecrementWith3</button>                
                <button onClick={this.props.incrementAgain}>Increment Again</button>
                <br/><br/>
                <input type="number" onChange={this.handleChanges.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Incrmenet With User Input</button>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
