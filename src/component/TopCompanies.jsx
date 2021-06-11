import React from "react";
import defaulticon from '../images/defaulticon.jpeg';
import Title from './Title';

export default class TopCompanies extends React.Component {

  onTopCompanyClickHandler(company) {
    const { handleCompany } = this.props;
    handleCompany(company);
  }

  renderTopCompany(company) {
    return (
      <div className="company" onClick={() => this.onTopCompanyClickHandler(company)}>
        <div className="company_logo">
          <img className="icon" src={defaulticon} alt="" />
        </div>
        <div className="company_text">
          <p>{company.company_name}</p>
          <p className="company_address">{company.company_address}</p>
        </div>
      </div>
    )
  }

  render() {
    const { companies } = this.props;
    return (
      <div className="topCompanies">
        <Title>Các công ty nổi bật</Title>
        <div>
          {companies.map((company, i) => this.renderTopCompany(company))}
        </div>
      </div>
    );
  }
}