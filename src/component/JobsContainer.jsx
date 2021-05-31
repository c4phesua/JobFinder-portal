import React from 'react';
import Jobs from "./Jobs";
import JobDescription from "./JobDescription";

export default class JobsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      job: null,
    }
  }

  render() {
    return (
      <div className="jobsContainer">
        <Jobs />
        <JobDescription />
      </div>
    );
  }
}