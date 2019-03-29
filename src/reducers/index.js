import { combineReducers } from 'redux';
import NewsFeedItemsReducer from './reducer_news_items';

const rootReducer = combineReducers({
  news: NewsFeedItemsReducer
});

export default rootReducer;
