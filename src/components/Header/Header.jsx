import React from 'react';
import radium from 'radium';

const styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',
  },

  primary: { background: '#0074D9' },

  warning: { background: '#FF4136' },
};

const Header = props =>
  <div
    style={[
      styles.base,
      styles[props.headerType],
    ]}
  >{props.headerType}</div>;

Header.propTypes = { headerType: React.PropTypes.string.isRequired };

export default radium(Header);
