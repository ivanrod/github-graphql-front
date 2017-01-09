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

  addSelectedRepository(repository) {
    this.setState((prevState) => {
      const oldSelected = prevState.selectedRepositories;
      const selectedRepositories = [repository, ...oldSelected];
      const newState = Object.assign({}, prevState, { selectedRepositories });

      return newState;
    });
  }

  removeSelectedRepository(repository) {
    this.setState((prevState) => {
      const oldSelected = prevState.selectedRepositories;
      const index = oldSelected.indexOf(repository);
      const selectedRepositories = [
        ...oldSelected.slice(0, index), // eslint-disable-line no-magic-numbers
        ...oldSelected.slice(index + 1), // eslint-disable-line no-magic-numbers
      ];
      const newState = Object.assign({}, prevState, { selectedRepositories });

      return newState;
    });
  }

  handleSelectedChange(event, repository) {
    const { target: { checked } } = event;

    if (checked) {
      this.addSelectedRepository(repository);

      return;
    }

    this.removeSelectedRepository(repository);
  }

  render() {
    return (
      < StyleRoot >
        <Grid>
          <Cell width="1">
            < Header headerType="primary" title="Header" / >
          </Cell>
          <Cell
            smallCellWidth="1"
            mediumCellWidth="1/2"
            align="center"
          >
            <div>
              < GithubList
                repositories={this.state.repositories}
                onSelectedChange={this.handleSelectedChange}
              />
            </div>
          </Cell>
          <Cell
            smallCellWidth="1"
            mediumCellWidth="1/2"
            align="center"
          >
            < GithubChart repositories={this.state.selectedRepositories} />
          </Cell>
        </Grid>
        < Style rules={styles} />
      </ StyleRoot >
    );
  }
}

export default radium(MainComponent);
