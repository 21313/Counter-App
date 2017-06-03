export default class CounterAction{
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static INCREMENT_WITH_VALUE = 'INCREMENT_WITH_VALUE';
    static DECREMENT_WITH_VALUE = 'DECREMENT_WITH_VALUE';
    static INCREMENT_WITH_HANDLER = 'INCREMENT_WITH_HANDLER';

    static increment(){
        return {
            type : CounterAction.INCREMENT
        }
    }
    static decrement(){
        return {
            type : CounterAction.DECREMENT
        }
    }
    static incrementWithValue(val){
        return {
            type : CounterAction.INCREMENT_WITH_VALUE,
            value : val
        }
    }
    static decrementWithValue(val){
        return {
            type : CounterAction.DECREMENT_WITH_VALUE,
            value : val
        }
    }
    static incrementWithHandler(){
        return{
            type : 'INCREMENT_WITH_HANDLER'
        }
    }
}