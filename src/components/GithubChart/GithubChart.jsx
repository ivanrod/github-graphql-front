import React from 'react';
import radium from 'radium';
import NVD3Chart from 'react-nvd3';
import styles from './githubChartStyles';

const GithubChart = props =>
  <div
    style={[
      styles.base,
    ]}
  >
    <h3>GithubChart</h3>
    <NVD3Chart id="barChart" type="discreteBarChart" datum={props.datum} x="label" y="value" />
  </div>;

GithubChart.propTypes = { datum: React.PropTypes.arrayOf(React.PropTypes.object) };

export default radium(GithubChart);
