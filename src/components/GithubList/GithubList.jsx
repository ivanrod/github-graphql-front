import shortid from 'shortid';
import React from 'react';
import radium from 'radium';
import styles from './githubListStyles';

const GithubList = props =>
  <div
    style={[
      styles.base,
    ]}
  >
    <h3 style={[styles.title]}>Github Repositories
      <span style={[styles.counter]}>{props.repositories.length}</span>
    </h3>
    <div style={[styles.boxedInner]}>
      <ul style={[styles.repoList]}>
        {props.repositories.map((repository, index) => {
          if (repository) {
            const generatedId = shortid.generate();

            return (
              <li key={index}>
                <label htmlFor={generatedId} style={[styles.repoListItem]}>
                  <input id={generatedId} type="checkbox" />
                  {repository.name}
                </label>
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  </div>;

GithubList.propTypes = { repositories: React.PropTypes.arrayOf(React.PropTypes.object) };

export default radium(GithubList);
