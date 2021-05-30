import React from 'react';
import Job from "./Job";

export default class Jobs extends React.Component {

  render() {

    
    return (
      <div className="jobs">
        <Job title="Java developer" index="0" company="FPT Software"/>
        <Job title="Java developer" index="1" company="Katalon Vietnam" />
        <Job title="Java developer" index="2" company="KMS Technology" />
      </div>
    );
  }
}