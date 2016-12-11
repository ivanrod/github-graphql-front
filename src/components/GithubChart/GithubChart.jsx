import React from 'react';
import radium from 'radium';
import NVD3Chart from 'react-nvd3';
import styles from './githubChartStyles';

const GithubChart = (props) => {
  const repositories = props.repositories;

  return (
    <div
      style={[
        styles.base,
      ]}
    >
      <h3>GithubChart</h3>
      <NVD3Chart type="discreteBarChart" datum={repositories} x="label" y="value" />
    </div>
  );
};

GithubChart.propTypes = { repositories: React.PropTypes.arrayOf(React.PropTypes.object) };

export default radium(GithubChart);
