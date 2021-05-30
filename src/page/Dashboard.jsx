import React from 'react';
import JobsContainer from '../component/JobsContainer';
import TopCompanies from "../component/TopCompanies";
class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <JobsContainer/>
        <TopCompanies/>
      </div>
    );
  }
}

export default Dashboard;