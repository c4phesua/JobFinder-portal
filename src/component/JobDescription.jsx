import React from "react";
import MockupData from '../helper/MockupData';
import { goTo } from '../utils/Routes';

const renderJobDescription = (value) => {
  return value.length > 0 
    ? value 
    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
    + 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
}
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
          <p>{renderJobDescription(job.description)}</p>
        </div>
        <div>
          <button onClick={() => goTo('/login')}>Apply</button>
        </div>
      </div>
    );
  }
}