import React from 'react';
import ReactDOM from 'react-dom';

const SimpleComponent = props => <div>{props.foo}</div>;

SimpleComponent.propTypes = { foo: React.PropTypes.string.isRequired };

ReactDOM.render(< SimpleComponent foo="Hello" message="React Demo" / >,
    document.querySelector('.js-app')
);
