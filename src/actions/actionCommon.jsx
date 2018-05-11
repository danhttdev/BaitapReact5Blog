import axios from 'axios';
import {
    COMMON_TOGGLE_PERMIT,
    HOST,
}   from '../constants/constants';
import { at_news_add_arr } from '../actions/actionNews';
import { at_account_add_arr } from '../actions/actionAccount';

export function at_common_toggle_permit() {
    return {
        type: COMMON_TOGGLE_PERMIT,
    }
}
export function atx_getdata() {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            //let info ={ username:'', password:''};
            axios.get(link)
            .then((res)=> {
                console.log(res.data);
                dispatch(at_common_toggle_permit());
                dispatch(at_news_add_arr(res.data.news));
                dispatch(at_account_add_arr(res.data.accounts));
                    console.log(res);
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}