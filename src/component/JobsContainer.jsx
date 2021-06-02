import React from 'react';
import Jobs from "./Jobs";
import JobDescription from "./JobDescription";

export default class JobsContainer extends React.Component {

  onJobClick() {
    
  }

  render() {
    return (
      <div className="jobsContainer">
        <Jobs onClick={this.onJobClick()}/>
        <JobDescription />
      </div>
    );
  }
}