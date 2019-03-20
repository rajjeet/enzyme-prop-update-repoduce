import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import configuredStore from "./configureStore";

let root = document.getElementById('react-root');

let render = Component => ReactDOM.render(
    <Provider store={configuredStore}>
        <Component/>
    </Provider>
    , root);

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        let NextApp = require('./App');
        render(NextApp);
    });
}


