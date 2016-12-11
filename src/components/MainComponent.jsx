import React from 'react';
import radium from 'radium';
import { Grid, Cell } from 'radium-grid';

// Components
import Header from './Header/Header';
import GithubList from './GithubList/GithubList';
import GithubChart from './GithubChart/GithubChart';

// Services
import connector from '../services/connector';

// Styles
import styles from './mainComponentStyles';

const { Style, StyleRoot } = radium;

class MainComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      repositories: [],
      selectedRepositories: [],
    };

    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.fetchRepositories();
  }

  async fetchRepositories() {
    const repositories = await connector.get('repositories/1');

    this.setState((prevState) => {
      const newState = Object.assign({}, prevState, { repositories: repositories.repositories });

      return newState;
    });
  }

  handleSelectedChange(repositories) {
    this.setState((prevState) => {
      const newState = Object.assign({}, prevState, { selectedRepositories: repositories });

      return newState;
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
              < GithubList
                repositories={this.state.repositories}
                onSelectedChange={this.handleSelectedChange}
              />
            </div>
          </Cell>
          <Cell>
            < GithubChart repositories={this.state.selectedRepositories} />
          </Cell>
        </Grid>
        < Style rules={styles} />
      </ StyleRoot >
    );
  }
}

export default radium(MainComponent);
