import {createStore}  from 'redux';

//Action generators- function that return objects
/*const IncrementCount=(payload={})=>({
    type:'INCREMENT',
    incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy:1
})
                                // OR
const IncrementCount=({incrementBy})=>({
    type:'INCREMENT',
    incrementBy:typeof incrementBy==='number'?incrementBy:1
})*/

//Using default values
//If IncerementsBy exists than great if not use 1
const IncrementCount=({incrementBy=1}={})=>({
    type:'INCREMENT',
    incrementBy
})

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const resetCount=()=>({
    type:'RESET'
})

const setCount=({count}={})=>({
    type:"SET",
    count
})


/*const add=({a,b})=>{
    return a+b;
};
console.log({a:1,b:12})*/

//To access redux we have to change the store
const store = createStore((state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                // count:state.count+1
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy=typeof action.decrementBy==='number'?action.decrementBy:1;
            return{
                count:state.count-action.decrementBy
            }
        
        case 'SET':
            return{
                count:action.count
            }
        
        case 'RESET':
            return{
                count:0
            }
            
        default:
            return state;
    }
    /*if(action.type==='INCREMENT'){
        return {
            count:state.count+1
        }
    }
    else{
        return state;
    }*/
});

// store.subscribe(()=>{
//     console.log(store.getState());
// })

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})


//This is equivalant to 
/*this.setState((prevState)=>{
})*/

//Action-nothing more than an object sent to the store

//Increment
/*store.dispatch({
    type:'INCREMENT',
    incrementBy:5
})
*/
store.dispatch(IncrementCount({incrementBy:5}))

// unsubscribe();

/*store.dispatch({
    type:'INCREMENT'
})*/

store.dispatch(IncrementCount());

/*store.dispatch({
    type:'RESET'
})*/

store.dispatch(resetCount());

/*store.dispatch({
    type:'DECREMENT',
    decrementBy:10
})

store.dispatch({
    type:'DECREMENT'
})*/

//If the incrementBy is not given here, it will decrement by the default one
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

/*store.dispatch({
    type:'SET',
    count:101
})*/

store.dispatch(setCount({count:101}))

