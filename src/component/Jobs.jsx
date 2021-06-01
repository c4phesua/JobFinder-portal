import React from 'react';
import Job from "./Job";
import MockupData from "../helper/MockupData";
const data = MockupData.data_home_page;

export default class Jobs extends React.Component {

  render() {

    
    return (
      <div className="jobs">
        <Job title={data.JOB_LIST[1].title} index="0" company="FPT Software" place="HCMC"/>
        <Job title="Java developer" index="1" company="Katalon Vietnam" place="HCMC"/>
        <Job title="Java developer" index="2" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="3" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="4" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="5" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="6" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="7" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="8" company="KMS Technology" place="HCMC"/>
        <Job title="Java developer" index="9" company="KMS Technology" place="HCMC"/>
      </div>
    );
  }
}