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

export default expensesReducer;