import React from "react";

export default class JobDescription extends React.Component {

  render() {
    const {jobname} = this.props;
    return (
      <div className="jobDescription">
        <h1>Job Description</h1>
        <div className="jobDetail">
          job details
        </div>
      </div>
    );
  }
}