import React from "react";
import MockupData from '../helper/MockupData';
import { goTo } from '../utils/Routes';
import Title from './Title';

const renderJobDescription = (value) => {
  return value.length > 0
    ? value
    : MockupData.loremipsum;
}
export default class JobDescription extends React.Component {

  renderTagList(tagList) {
    return tagList.join(', ');
  }


  render() {
    const { jobIndex } = this.props;
    const jobs = MockupData.data_home_page.JOB_LIST;
    const job = jobs[jobIndex];
    return (
      <div className="jobDescription">
        <div className="jobHeader">
          <h1>{job.title}</h1>
          <h3>{job.type}</h3>
          <button className="btnApply" onClick={() => goTo('/apply-cv/'+jobIndex)}>Ứng tuyển</button>
        </div>
        <div className="jobDetail">
          <h2>{job.company_name}</h2>
          <h5>Địa chỉ: {job.company_address}</h5>
          <h4>{this.renderTagList(job.tag_list)}</h4>
          <h3>Lương: {job.salary} VND</h3>
        </div>
        <div className="jobFooter">
          <p>{renderJobDescription(job.description)}</p>
        </div>
      </div>
    );
  }
}