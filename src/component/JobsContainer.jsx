import React from 'react';
import Jobs from "./Jobs";
import JobDescription from "./JobDescription";

export default class JobsContainer extends React.Component {

  render() {
    return (
      <div className="jobsContainer">
        <Jobs />
        <JobDescription />
      </div>
    );
  }
}