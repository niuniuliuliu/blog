/**
 * Created by ck on 20/04/2017.
 */
import {createAction} from 'redux-actions';
import 'whatwg-fetch';
import {AppConst} from '../lib/AppConst';

export const CATEGORYLOAD_ACTION = createAction(
    'CATEGORY_LOAD')((async () => {
    const response = await fetch(`${AppConst.API_URL}/categorys?rd=${Math.random()}`);
    let result = await response.json();
    return result;
})());