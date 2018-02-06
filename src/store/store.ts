import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as promise from 'redux-promise';
import reducer from './reducer';

export default createStore(reducer,applyMiddleware(thunk,promise));