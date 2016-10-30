import React from 'react';
import radium from 'radium';

import Header from './Header/Header';

const styles = {};

const MainComponent = () =>
  <div>
    < Header headerType="primary" message="React Demo" / >
    <div style={[styles.base]}>Body</div>
  </div>;

MainComponent.propTypes = { foo: React.PropTypes.string.isRequired };

export default radium(MainComponent);
