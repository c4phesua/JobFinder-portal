import React from "react";
import MockupData from '../helper/MockupData';

export default class TopCompanies extends React.Component {

  renderTopCompany(company) {
    return (
      <>
        <div>{company.company_name}</div>
      </>
    )
  }

  render() {
    const companies = MockupData.data_home_page.TOP_COMPANY;
    return (
      <div className="topCompanies">
        <h1>Top companies</h1>
        <div>
          {companies.map((company, i) => this.renderTopCompany(company))}
        </div>
      </div>
    );
  }
}