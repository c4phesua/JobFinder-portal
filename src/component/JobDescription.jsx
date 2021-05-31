import React from 'react';
import { Card } from '@material-ui/core';

export default class JobDescription extends React.Component {

  renderContent() {
    return (
      <h2>Content</h2>
    );
  }

  render() {
    const job = this.props;
    const { title, company, place, detail } = job;
    return (
      <div className="jobDescription">
        <h1>Job Description</h1>
        <div className="jobDetail">
          <h3>{title}</h3>
          <p>{company}</p>
          <p>{place}</p>
          <p>{detail}</p>
        </div>
      </div>
    );
  }
}