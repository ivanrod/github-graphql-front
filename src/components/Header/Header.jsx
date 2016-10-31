import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import styles from './headerStyles';

const Header = props =>
  <div
    style={[
      styles.base,
      styles[props.headerType],
    ]}
  >
    <Grid>
      <Cell align="center" width="1/2">
        <p>{props.title}</p>
      </Cell>
      <Cell align="center" width="1/2">
        <p>Header buttons</p>
      </Cell>
    </Grid>
  </div>;

Header.propTypes = {
  headerType: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default radium(Header);
