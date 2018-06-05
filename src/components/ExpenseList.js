import React from 'react';
import ItemList from './ExpenseListItem';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses'

const ExpenseList=(props)=>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ItemList key={expense.id} {...expense}/>
        })} 
    </div>
);

const mapStateToProps=(state)=>{
    return{
        // expenses:state.expenses,
        // filters:state.filters
        expenses:selectExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList=connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;