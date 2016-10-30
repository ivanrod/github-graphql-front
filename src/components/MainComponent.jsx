import React from 'react';
import radium from 'radium';

import Header from './Header/Header';

const { Style, StyleRoot } = radium;

/*eslint-disable*/
const styles = {
  body: {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    margin: 0,
  },
  mediaQueries: {
    '(max-width: 600px)': { body: { background: 'gray' } },
    '(max-width: 400px)': {
      body: { background: 'blue' },
      'p, h1': { color: 'white' },
    },
  },
};
/*eslint-enable*/

const MainComponent = () =>
  < StyleRoot >
    < Header headerType="primary" message="React Demo" / >
    <div>Body</div>
    < Style rules={styles} />
  </ StyleRoot >;

export default radium(MainComponent);
