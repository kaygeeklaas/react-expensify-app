import moment from 'moment';

//Expenses: The complete array it is going to be filtering

const getVisibleExpenses=(expenses, {text, sortBy, startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const createdAtMoment=moment(expense.createdAt);
        const startDateMatch=startDate ?startDate.isSameOrBefore(createdAtMoment,'day'):true
        // const endDateMatch=typeof endDate !=='number' || expense.createdAt <= endDate;
        const endDateMatch=endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true
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

export default getVisibleExpenses;