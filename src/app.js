import React from 'react';
import ReactDOM from 'react-dom';
import SimpleComponent from './components/SimpleComponent';

const simpleComponent = < SimpleComponent foo="primary" message="React Demo" / >;

ReactDOM.render(
    simpleComponent,
    document.querySelector('.js-app')
);
