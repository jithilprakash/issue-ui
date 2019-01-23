import data from "../sampleData/sampleJson.json"


export const getIssueRaised = () => {
    console.log("data",data);
    return dispatch => {
      dispatch({ type: "GET_ISSUE_RAISED", payload: data });
    };
  };