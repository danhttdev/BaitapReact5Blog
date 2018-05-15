import axios from 'axios';
import {
    COMMON_TOGGLE_PERMIT,
    COMMON_LOADED,
    HOST,
}   from '../constants/constants';
import { at_news_add_arr } from '../actions/actionNews';
import { at_account_add_arr } from '../actions/actionAccount';

export function at_common_toggle_permit() {
    return {
        type: COMMON_TOGGLE_PERMIT,
    }
}
export function at_common_loaded() {
    return {
        type: COMMON_LOADED,
    }
}
export function atx_getdata() {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            axios.get(link)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                dispatch(at_news_add_arr(res.data.news));
                dispatch(at_account_add_arr(res.data.accounts));
                dispatch(at_common_loaded());
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}