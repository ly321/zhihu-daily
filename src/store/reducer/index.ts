import {combineReducers} from 'redux';

import reducerStory from './module/story';
import reducerSidebar from './module/sidebar';
import reducerTheme from './module/theme';

export default combineReducers({
	reducerStory,
	reducerSidebar,
	reducerTheme
});