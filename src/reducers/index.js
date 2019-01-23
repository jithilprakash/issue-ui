import { combineReducers } from "redux";
import { issueReducer } from "../reducers/issue.reducer";

export default combineReducers({
    issues: issueReducer
})