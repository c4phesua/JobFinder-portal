import React from 'react';
import Job from './Job';

export default class Jobs extends React.Component {

  renderJob(job, index) {
    return (
      <Job
        ref={this.jobRef}
        job={job}
        index={index}
        key={index}
        onJobClick={(index) => this.onJobClick(index)}
      />
    );
  }

  onJobClick(index) {
    const { handleJobClick } = this.props;
    handleJobClick(index);
  }

  render() {
    const { jobs } = this.props;

    return (
      <div className="jobs">
        {
          jobs.map((job, index) => this.renderJob(job, index))
        }
      </div>
    );
  }
}