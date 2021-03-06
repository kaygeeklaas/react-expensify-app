import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage=()=>(
    <div>
        This is from the dashboard account
    </div>
)

const AddExpensePage=()=>(
    <div>
        This is from my add expense component
    </div>
)

const EditExpensePage=()=>(
    <div>
        This is the edit expense page
    </div>
)

const HelpPage=()=>(
    <div>
        This is the expensify help page
    </div>
)

const NotFoundPage=()=>(
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
)

const Header=()=>(
    /*<header>
        <h1>Expensify</h1>
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Expense</Link>
        <Link to="/edit">Edit Expense</Link>
        <Link to="/help">Help</Link>
    </header>*/

    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const routes=(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)


ReactDOM.render(routes,document.getElementById('app'));



