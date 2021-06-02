import React from 'react';

export default class Job extends React.Component {

  renderColor(index) {
    return index % 2 == 0 ? 'bluecard' : 'whitecard';
  }

  onJobClick() {
    const { index } = this.props;
    return index;
  }

  render() {
    const { name, title, company, place, index } = this.props;
    const jobCard = `jobcard ${this.renderColor(index)}`;

    return (
      <div className={jobCard} onClick={() => this.onJobClick()}>
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{place}</p>
      </div>
    );
  }
}