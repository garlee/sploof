import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import { targetSong, defaultData } from './search.js';

const rootReducer = combineReducers({
  targetSong,
  defaultData,
  routing: routeReducer
});

export default rootReducer;