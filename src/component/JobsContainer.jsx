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
    return (
      <div className="jobsContainer">
        <Jobs handleJobClick={(index) => this.handleJobClick(index)}/>
        <JobDescription jobIndex={jobIndex} />
      </div>
    );
  }
}