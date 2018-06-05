import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD EXPENSE
const addExpense=(
    { 
        description='', 
        note='', 
        amount=0, 
        createdAt=0 
    }={})=>
    ({
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
});

//REMOVE EXPENSE
const removeExpense=({id} = {})=>({
    type:'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE
const editExpense=(id, updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})

const searchExpense=(text)=>({
    type:'SEARCH_TEXT',
    text
})

const sortByAmount=(amount)=>({
    type:'SEARCH_AMOUNT',
    amount
})

const sortByDate=(date)=>({
    type:'SEARCH_DATE',
    date
})

const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})

const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})


//Expenses Reducer
const expensesReducerDefaultState=[];

const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            //We use concat to return the new array
            return [
                ...state,action.expense
            ]

        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                //If its the ids match return false and remove item
                //other return true and keep the item
                return id !== action.id;
            })

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        //Grab all the properties from the existing object
                        ...expense,
                        //Override the ones that they passed in
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            })
            
        default:
            return state;
    }
}

//Filter Reducer
const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case 'SEARCH_TEXT':
            return{
                ...state,
                text:action.text
            }

        case 'SEARCH_AMOUNT':
            return{
                ...state,
                amount:action.amount
            }

        case 'SEARCH_DATE':
            return{
                ...state,
                date:action.date
            }

        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }

        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
}

//Expenses: The complete array it is going to be filtering

const getVisibleExpenses=(expenses, {text, sortBy, startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch=typeof endDate !=='number' || expense.createdAt <= endDate;
        const textMatch=typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase());

        //if all three of this are true than we have a complete and we wanna return true from filter
        //and the item will be kept in the array
        //if any of these are false the whole thing will result in false because we are using &&
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt <b.createdAt ? 1 : -1;
        }

        if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

//Store creation
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
);

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

//Add expenses
const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100,createdAt:-11000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-1000}));

//Remove expense
//store.dispatch(removeExpense({id:expenseOne.expense.id}));

//Edit expense
//store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))

//Search by text filter expense
store.dispatch(searchExpense('rent'));
//store.dispatch(searchExpense());

//Search by Amount filter expense
//store.dispatch(sortByAmount(300));

//Search by date filter expense
//store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate(999));
//store.dispatch(setStartDate());

const demoState={
    expenses:[{
        id:'ddsfdsf',
        description:"January Rent",
        note:"This was the final payment for that address",
        amount: 54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //Date or Amount
        startDate:undefined,
        endDate:undefined
    }
}

/*const user={
    name:'Jen',
    age:24
}*/

//Here we are spreading the object using babel spread object plugin
/*console.log({
    ...user
})*/

/*console.log({
    //We cannot ovveride the user's age before we spread the 'user' as the 'user' object will also ovveride it
    age:28,
    ...user,
    location:'South Africa',
    //We can ovveride the user's age 
    // age:27,
    Money:{
        currency:'Rand'
    }
})
*/
