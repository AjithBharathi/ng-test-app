import {createAction, createReducer, on, props} from '@ngrx/store';

const increment = createAction('[Counter Component] Increment');
const decrement = createAction('[Counter Component] Decrement');
const reset = createAction('[Counter Component] Reset');
const ownVal = createAction('[Counter] OwnVal', props<{value: number}>());

const initialState = 0;

const counterReducer = createReducer(
    initialState, 
    on(increment, (state)=>{
        return state +1;
    }),
    on(decrement, (state) => {
        return state - 1;       
    }),
    on(reset, () => {
        return initialState;
    }),
    on(ownVal, (state, {value})=>{
        console.log('ownVal called', state, value);
        return value;
    })
);

export {counterReducer, ownVal, increment, decrement, reset, initialState};