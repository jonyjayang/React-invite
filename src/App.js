import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import './config'
import Login from './container/login/login';
import Register from './container/register/register';
//引入redux
const store=createStore(reducer,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))
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
