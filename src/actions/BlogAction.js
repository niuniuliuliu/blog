/**
 * Created by ck on 20/04/2017.
 */
import {createAction} from 'redux-actions';
import 'whatwg-fetch';
import {AppConst} from '../lib/AppConst';
export const HOMELOADSTART_ACTION = {type: 'HOME_LOAD_START'};
export const HOMELOAD_ACTION = function (pageIndex, pageSize) {
    return createAction(
        'HOME_LOAD')((async () => {
        const response = await fetch(`${AppConst.API_URL}/blogs?pageIndex=${pageIndex}&pageSize=${pageSize}&rd=${Math.random()}`);
        let result = await response.json();
        return result;
    })());
};