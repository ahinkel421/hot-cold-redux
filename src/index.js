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

//Notes:

//Have to connect all components to store.
//export default connect()(componentName)

//Or, if the component takes props:

//const mapStateToProps = state => ({
//	prop: state.prop
//});

//export default connect(prop)(component)