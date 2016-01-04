import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../store'
import Container from './Main';

// Render the main component into the dom
ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('app'));
