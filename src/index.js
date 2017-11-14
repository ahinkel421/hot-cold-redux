import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';

import Game from './components/game';

ReactDOM.render(
	<Provider store={store}>
    	<Game />
    </Provider>,
    document.getElementById('root')
);
