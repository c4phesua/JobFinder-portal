import React from 'react';

export default class Job extends React.Component {

  renderColor(index) {
    return index % 2 == 0 ? 'bluecard' : 'whitecard';
  }

  onSelectJob(index) {
    console.log(index);
  }

  render() {
    const { title, company, place, index } = this.props;
    const jobCard = `jobcard ${this.renderColor(index)}`;
    const jobCardBtn = jobCard + ' button';

    return (
      <div className={jobCard}>
        <button className={jobCardBtn} onClick={this.onSelectJob(index)}>
          <h3>{title}</h3>
          <p>{company}</p>
          <p>{place}</p>
        </button>
      </div>
    );
  }
}