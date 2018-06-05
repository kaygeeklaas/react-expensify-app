import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {searchExpense} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore;

/*const expenseOne = store.dispatch(addExpense({description:'Water bill',amount:600,createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'Gas bill',amount:100,createdAt:500}));
const expenseThree = store.dispatch(addExpense({description:'Rent bill',amount:109500,createdAt:2000}));
const expenseFour = store.dispatch(addExpense({description:'Car bill',amount:800,createdAt:400}));*/

// store.dispatch(searchExpense('bill'));
// store.dispatch(searchExpense('water'));

/*const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses);*/

const jsx=(
    //Here we are providing the store we want access to
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));



