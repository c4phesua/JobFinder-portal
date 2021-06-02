import React from 'react';

export default class Job extends React.Component {

  renderColor(index) {
    return index % 2 === 0 ? 'bluecard' : 'whitecard';
  }

  onClick() {
    const { index, onJobClick } = this.props;
    onJobClick(index)
    return index;
  }

  render() {
    const { job, index } = this.props;
    const { company_name, title, company_address } = job;
    const jobCard = `jobcard ${this.renderColor(index)}`;

    return (
      <div className={jobCard} onClick={() => this.onClick()}>
        <h3>{title}</h3>
        <p>{company_name}</p>
        <p>{company_address}</p>
      </div>
    );
  }
}