import React from 'react';
import radium from 'radium';
import styles from './githubChartStyles';

const GithubChart = props =>
  <div
    style={[
      styles.base,
    ]}
  >
    <h3>GithubChart</h3>
    <p>{props.repositories}</p>
  </div>;

GithubChart.propTypes = { repositories: React.PropTypes.arrayOf(React.PropTypes.object) };

export default radium(GithubChart);
