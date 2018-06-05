import moment from 'moment';

//Filter Reducer
const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
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

export default filterReducer;
