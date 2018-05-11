import axios from 'axios';
import {
    ACCOUNT_LOGIN,
    ACCOUNT_LOGOUT,
    ACCOUNT_TOGGLE_LOGIN,
    ACCOUNT_ADD_ARR,
    ACCOUNT_SET_LOGIN_TRUE,
    LOGIN_COMPLETED,
    LOGIN_UNCOMPLETED,
    HOST,
    SIGNUP_COMPLETED
}   from '../constants/constants';

import {
    at_common_toggle_permit
}   from './actionCommon';

export function at_account_login(userinfo) {
    return {
        type: ACCOUNT_LOGIN,
        payload: {
            userinfo
        }
    }
}

export function at_account_logout() {
    return {
        type: ACCOUNT_LOGOUT,
    }
}

export function at_account_set_login_true() {
    return {
        type: ACCOUNT_SET_LOGIN_TRUE,
    }
}
export function at_account_toggle_login() {
    return {
        type: ACCOUNT_TOGGLE_LOGIN,
    }
}

export function at_account_add_arr(arr) {
    return {
        type: ACCOUNT_ADD_ARR,
        payload: {
            arr
        }
    }
}

export function atx_login(username, password, cb_success) {
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            let info ={ username:username, password:password};
            axios.post(link, info)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                if (res.data.key.trim() === LOGIN_COMPLETED) {
                    //alert(LOGIN_COMPLETED);
                    console.log(res);
                    dispatch(at_account_set_login_true());
                    dispatch(at_account_login(res.data.account));
                    cb_success(res.data.account);
                }
                else {
                    alert(LOGIN_UNCOMPLETED);
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}

export function atx_signup(userinfo,cb_success) {
    return (dispatch, getStore) => {
        console.log("nhay");
        console.log(userinfo);
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            // let info ={ 
            //     gender:userinfo.gender,
            //     address:userinfo.address,
            //     fullname:userinfo.fullname,
            //     password:userinfo.password,
            //     phone:userinfo.phone,
            //     username:userinfo.username
            // };
            // console.log(info);
            axios.post(link, userinfo)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                if (res.data.trim() === SIGNUP_COMPLETED) {
                    console.log(res);
                    cb_success();
                }
                else {
                    alert(res.data);
                }
                console.log("nhay 3");
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}