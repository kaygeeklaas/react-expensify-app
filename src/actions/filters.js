//Here we store the action generators for our filter
export const searchExpense=(text)=>({
    type:'SEARCH_TEXT',
    text
})

export const sortByAmount=(amount)=>({
    type:'SEARCH_AMOUNT',
    amount
})

export const sortByDate=(date)=>({
    type:'SEARCH_DATE',
    date
})

export const setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
})

export const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
})