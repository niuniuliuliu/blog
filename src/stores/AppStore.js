/**
 * Created by ck on 19/04/2017.
 */
import {createStore,applyMiddleware} from 'redux';
import Reducers from '../reducers/Reducers';
import promiseMiddleware from 'redux-promise';
export const AppStore = createStore(Reducers,applyMiddleware(promiseMiddleware));