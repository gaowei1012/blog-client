import { combineReducers } from 'redux';
import Article from './article';
import Articles from './articles';

// 合并 reducers
const reducer = combineReducers({
    Article,
    Articles,
});

export default reducer;