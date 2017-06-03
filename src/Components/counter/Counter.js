import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    valueChange(event) {
        this.setState({count: parseInt(event.target.value)});
    }
    updateCounterWithOne(){
        this.props.update(1)
    }
    updateCounterWithInput(){
        this.props.update(this.state.count);
    }
    render() {
        return (
            <div>
                <div>
                    <h1>  Dum Component </h1>
                </div>
                <div>
                    <h2>Counter : {this.props.counter}</h2>
                    <div>
                        <input type="number" onChange={this.valueChange.bind(this)} />
                        <button onClick={this.updateCounterWithOne.bind(this)}>IncrementByOne</button>
                        <button onClick={this.updateCounterWithInput.bind(this)}>IncrementUserInput</button>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}
export default Counter;