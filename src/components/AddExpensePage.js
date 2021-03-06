import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm';


const AddExpensePage=(props)=>(
    <div>
        <h2>Add Expense</h2>
        
        <ExpenseForm onSubmit={(expense)=>{
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}/>
    </div>
)

export default connect()(AddExpensePage);

//expense : it is the object we get when the form is submitted