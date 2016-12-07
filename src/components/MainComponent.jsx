import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import Header from './Header/Header';
import GithubList from './GithubList/GithubList';
import styles from './mainComponentStyles';

const { Style, StyleRoot } = radium;

const MainComponent = () => {
  const x = ['34', '32'];

  return (
    < StyleRoot >
      <Grid>
        <Cell width="1">
          < Header headerType="primary" title="Header" / >
        </Cell>
        <Cell width="1">
          <div>
            < GithubList repositories={x} />
          </div>
        </Cell>
      </Grid>
      < Style rules={styles} />
    </ StyleRoot >
  );
};

export default radium(MainComponent);
