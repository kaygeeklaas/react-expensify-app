

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
