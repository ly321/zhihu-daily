import {combineReducers} from 'redux';

import reducerHome from './module/home';
import reducerSidebar from './module/sidebar';

export default combineReducers({
	reducerHome,
	reducerSidebar
});