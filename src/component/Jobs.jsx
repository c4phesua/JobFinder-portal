import React from 'react';
import Job from './Job';
import MockupData from '../helper/MockupData';
const data = MockupData.data_home_page;

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
    const jobs = data.JOB_LIST;

    return (
      <div className="jobs">
        {
          jobs.map((job, index) => this.renderJob(job, index))
        }
      </div>
    );
  }
}