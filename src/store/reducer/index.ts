import {combineReducers} from 'redux';

import reducerStory from './module/story';
import reducerSidebar from './module/sidebar';
import reducerTheme from './module/theme';
import reducerContent from './module/content';

export default combineReducers({
	reducerStory,
	reducerSidebar,
	reducerTheme,
	reducerContent,
});