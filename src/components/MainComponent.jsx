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

class MainComponent extends React.Component {

  constructor() {
    super();

    this.state = { repositories: [] };

    connector.get('repositories/1')
    .then((repositories) => {
      this.setState({ repositories: repositories.repositories });
    });
  }

  render() {
    return (
      < StyleRoot >
        <Grid>
          <Cell width="1">
            < Header headerType="primary" title="Header" / >
          </Cell>
          <Cell width="1">
            <div>
              < GithubList repositories={this.state.repositories} />
            </div>
          </Cell>
        </Grid>
        < Style rules={styles} />
      </ StyleRoot >
    );
  }
}

export default radium(MainComponent);
