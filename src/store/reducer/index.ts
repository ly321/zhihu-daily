import {combineReducers} from 'redux';

import reducerStory from './module/story';
import reducerSidebar from './module/sidebar';

export default combineReducers({
	reducerStory,
	reducerSidebar
});