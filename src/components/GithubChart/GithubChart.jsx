import moment from 'moment';
import React from 'react';
import radium from 'radium';
import NVD3Chart from 'react-nvd3';
import styles from './githubChartStyles';

const parseRepositories = function parseRepositories(repositories) {
  // https://github.com/nvd3-community/nvd3/blob/gh-pages/examples/stackedAreaChart.html
  const parsedRepositories = repositories.map((repository) => {
    return {
      key: repository.name,
      values: repository.commits.map(commit => {
        const commitDate = commit.node.author.date;
        console.log(moment(commitDate))
        return [moment(commitDate).valueOf(), 1];
        // "values" : [ [ 1138683600000 , 14.212410956029] ,
      }),
    };
  });

  console.log(parsedRepositories)
  return parsedRepositories;
};

const GithubChart = (props) => {
  const repositories = props.repositories;

  return (
    <div
      style={[
        styles.base,
      ]}
    >
      <h3>GithubChart</h3>
      <NVD3Chart
        type="stackedAreaChart"
        datum={parseRepositories(repositories)}
        x={function(d) { return d[0] }}
        xAxis={{ tickFormat: (d) => d3.time.format('%x')(new Date(d)) }}
      />
    </div>
  );
};

GithubChart.propTypes = { repositories: React.PropTypes.arrayOf(React.PropTypes.object) };

export default radium(GithubChart);
