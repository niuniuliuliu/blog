/**
 * Created by ck on 19/04/2017.
 */
import {createStore} from 'redux';
import Reducers from '../reducers/Reducers';
export const AppStore = createStore(Reducers);