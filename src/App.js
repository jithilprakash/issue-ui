import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TableContent from "./components/tableContent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getIssueRaised } from "./actions/issue.action";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.getIssues();
  };

  render() {
    console.log("app render",this.props.issues);
    return (
      <div className="App">
        <Paper className="paper-header">
            Issues
          </Paper>
        <Paper className="paper-table">
          <TableContent issuesList={this.props.issues} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("issues", state);
  return {
    issues: state.issues.issues
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getIssues: getIssueRaised
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
