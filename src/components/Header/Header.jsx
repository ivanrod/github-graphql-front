import React from 'react';
import radium from 'radium';

const styles = {
  base: {
    backgroundColor: '#333',
    color: '#ffa700',
    height: '80px',
    lineHeight: '80px',
    padding: '0 20px',
    textAlign: 'center',
    width: '100%',
  },

  primary: { color: '#0074D9' },

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
