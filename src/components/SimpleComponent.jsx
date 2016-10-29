import React from 'react';

const SimpleComponent = props => <div>{props.foo}</div>;

SimpleComponent.propTypes = { foo: React.PropTypes.string.isRequired };

export default SimpleComponent;
