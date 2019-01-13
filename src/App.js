import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import './config'
import Login from './container/login/login';
import Register from './container/register/register';
import store from './redux/store';
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
