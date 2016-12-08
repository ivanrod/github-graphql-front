import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import styles from './githubListStyles';

const GithubList = props =>
  <div
    style={[
      styles.base,
    ]}
  >
    <Grid>
      <Cell align="center" width="1/2">
        <p>Github Repositories</p>
      </Cell>
      <Cell>
        <ul>
          {props.repositories.map((repository, index) => {
            if (repository) {
              return <li key={index}>{repository.name}</li>;
            }
          })}
        </ul>
      </Cell>
    </Grid>
  </div>;

GithubList.propTypes = { repositories: React.PropTypes.arrayOf(React.PropTypes.object) };

export default radium(GithubList);
