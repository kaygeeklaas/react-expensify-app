import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now=moment();
console.log(now.format('MMM DD YYYY'));

class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            description:props.expense ? props.expense.description:'',
            amount:props.expense ? (props.expense.amount/100).toString():'',
            note:props.expense ? props.expense.note:'',
            createdAt:props.expense ? moment(props.expense.createdAt):moment(),
            calenderFocused:false,
            error:undefined
        }
    }
    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}))
    }

    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            }))
        }
    }

    onNoteChanged=(e)=>{
        // const note=e.target.value;
        e.persist();
        this.setState(()=>({
            note:e.target.value
        }))
    }

    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({
                createdAt
            }))
        }
    }

    onFocusChange=({focused})=>{
        this.setState(()=>({
            calenderFocused:focused
        }))
    }

    onSubmit=(e)=>{
        e.preventDefault();
        //Check both the description and the amount
        if(!this.state.description || !this.state.amount){
            //Set error state equal to 'Error message'
            this.setState(()=>({
                error:'Please provide description and amount'
            }))

        }else{
            //Clear the error
           this.setState(()=>({
               error:undefined
           }))
           this.props.onSubmit({
               description:this.state.description,
               amount:parseFloat(this.state.amount, 10)*100,
               //The valueOf comes from momemnt so we can capture the dat
               createdAt:this.state.amount.valueOf(),
               note:this.state.note
           })
           
        }
        console.log('submitted')
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text"
                    placeholder="Description" 
                    autoFocus 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}
                    /><br/>

                    <input 
                    type="number" 
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={ ()=> false }
                        
                    />
                    <textarea 
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChanged}  
                    >
               
                    </textarea>

                    <button>
                        Add Expense
                    </button>
                </form>

                
            </div>
        )
    }
}

export default ExpenseForm;