import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';

// Components
import Header from './Header/Header';
import GithubList from './GithubList/GithubList';

// Services
import connector from '../services/connector';

// Styles
import styles from './mainComponentStyles';

const { Style, StyleRoot } = radium;

const MainComponent = () => {
  connector.get('repositories/1')
  .then((repositories) => {
      console.log(repositories);
  });

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
