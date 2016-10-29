import React from 'react';
import ReactDOM from 'react-dom';
import SimpleComponent from './components/SimpleComponent';

ReactDOM.render(< SimpleComponent foo="Hello" message="React Demo" / >,
    document.querySelector('.js-app')
);
