import React from 'react';
import Jobs from "./Jobs";
import JobDescription from "./JobDescription";

export default class JobsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobIndex: 0,
    }
  }

  handleJobClick(jobIndex) {
    this.setState({
      jobIndex
    });
  }


  render() {
    const { jobIndex } = this.state;
    const { jobs } = this.props;
    return (
      <div className="jobsContainer">
        <Jobs
          handleJobClick={(index) => this.handleJobClick(index)}
          jobs={jobs}
        />
        <JobDescription jobIndex={jobIndex} />
      </div>
    );
  }
}