import React from 'react';
import JobsContainer from '../component/JobsContainer';
import TopCompanies from "../component/TopCompanies";
import MockupData from '../helper/MockupData';

class Dashboard extends React.Component {

    componentDidMount() {
        document.title = "Job Finder"
    }

    handleCompany(company) {
        console.log('handle', company);
    }

    render() {
        const companies = MockupData.data_home_page.TOP_COMPANY;
        const jobs = MockupData.data_home_page.JOB_LIST;
        return (
            <div className="dashboard">
                <JobsContainer jobs={jobs} />
                <TopCompanies handleCompany={this.handleCompany} companies={companies} />
            </div>
        );
    }
}

export default Dashboard;
