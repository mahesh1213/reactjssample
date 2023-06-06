import {createStore,combineReducers,applyMiddleware} from 'redux';
import {counterReducer} from './reducers/counterReducer';
import {postsReducer} from './reducers/postsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    countState:counterReducer,
    postState:postsReducer
});

export const store = createStore(rootReducer,applyMiddleware(thunk));

console.log('store.getstore()',store.getState());