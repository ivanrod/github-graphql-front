import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import Header from './Header/Header';
import styles from './mainComponentStyles';

// TODO: Add postcss-js & css-next

const { Style, StyleRoot } = radium;

const MainComponent = () =>
  < StyleRoot >
    <Grid>
      <Cell width="1">
        < Header headerType="primary" title="Header" / >
      </Cell>
      <Cell width="1">
        <div>Body</div>
      </Cell>
    </Grid>
    < Style rules={styles} />
  </ StyleRoot >;

export default radium(MainComponent);
