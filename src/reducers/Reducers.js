/**
 * Created by ck on 19/04/2017.
 */
import {combineReducers} from 'redux';
import BlogReducer from './BlogReducer';
import CategoryReducer from './CategoryReducer';

const Reducers = combineReducers({
    BlogReducer,
    CategoryReducer
})

export default Reducers;