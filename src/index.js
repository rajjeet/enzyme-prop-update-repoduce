import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let root = document.getElementById('react-root');
let render = Component => ReactDOM.render(<Component />, root);

render(App);

if(module.hot){
    module.hot.accept('./App', () => {
        let NextApp = require('./App');
        render(NextApp);
    });
}


