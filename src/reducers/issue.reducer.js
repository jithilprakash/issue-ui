export function issueReducer(state={issues:[]},action){
    switch(action.type){
        case "GET_ISSUE_RAISED":
            return {...state,issues:action.payload};
            break;
    }
    return state;
}