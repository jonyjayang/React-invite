import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import './config'
import Login from './container/login/login';
import Register from './container/register/register';
// 注意， 版本2 .7 之后， window.devToolsExtension被重命名为window.__REDUX_DEVTOOLS_EXTENSION__
// 或window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__， 所以项目不建议使用window.devToolsExtension方式了。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
class App extends Component {
  render() {
    return (
      <div>
       <Provider store={store} >
          <BrowserRouter>
            <div>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
            </div>
          </BrowserRouter>
       </Provider>
      </div>
    );
  }
}

export default App;
