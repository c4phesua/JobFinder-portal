import React from "react";
import MockupData from '../helper/MockupData';

export default class JobDescription extends React.Component {


  render() {
    const { jobIndex } = this.props;
    const jobs = MockupData.data_home_page.JOB_LIST;
    const job = jobs[jobIndex];
    return (
      <div className="jobDescription">
        <h1>Job Description</h1>
        <div className="jobDetail">
          <h1>{job.title}</h1>
          <h2>{job.company_name}</h2>
          <h3>{job.company_address}</h3>
          <h3>{job.salary}$</h3>
          <h3>{job.tag_list}</h3>
        </div>
        <div>
          <button>Apply</button>
        </div>
      </div>
    );
  }
}