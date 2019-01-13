
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// 注意， 版本2 .7 之后， window.devToolsExtension被重命名为window.__REDUX_DEVTOOLS_EXTENSION__
// 或window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__， 所以项目不建议使用window.devToolsExtension方式了。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));;