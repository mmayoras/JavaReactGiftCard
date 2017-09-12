/* eslint-disable import/default */
require.context('./assets/', true, /^.*/);
import './styles/base.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import configureStore from './store/configureStore';
import App from './components/App';

const history = createHashHistory();
const store = configureStore();

render(
    <Provider store={store}>
        <App history={history} />
    </Provider>, document.getElementById('app')
);
