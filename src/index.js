import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './containers/Container';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { BrowserRouter,Switch } from 'react-router-dom' 

var store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Container />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById("root"));
registerServiceWorker();
