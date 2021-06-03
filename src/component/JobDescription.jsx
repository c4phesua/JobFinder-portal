import React from "react";
import MockupData from '../helper/MockupData';
import { goTo } from '../utils/Routes';

const renderJobDescription = (value) => {
  return value.length > 0 
    ? value 
    : MockupData.loremipsum;
}
export default class JobDescription extends React.Component {


  render() {
    const { jobIndex } = this.props;
    const jobs = MockupData.data_home_page.JOB_LIST;
    const job = jobs[jobIndex];
    return (
      <div className="jobDescription">
        <div className="jobDetail">
          <h1>{job.title}</h1>
          <button className="btnApply" onClick={() => goTo('/login')}>Apply now</button>
          <h2>{job.company_name}</h2>
          <h3>{job.company_address}</h3>
          <h3>{job.salary}$</h3>
          <h3>{job.tag_list}</h3>
          <p>{renderJobDescription(job.description)}</p>
        </div>
      </div>
    );
  }
}