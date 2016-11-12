import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import styles from './githubListStyles';

const GithubList = () =>
  <div
    style={[
      styles.base,
    ]}
  >
    <Grid>
      <Cell align="center" width="1/2">
        <p>Github Repositories</p>
      </Cell>
    </Grid>
  </div>;

GithubList.propTypes = {};

export default radium(GithubList);
