import {
    ACCOUNT_LOGIN,
    ACCOUNT_LOGOUT,
    ACCOUNT_TOGGLE_LOGIN,
    ACCOUNT_ADD_ARR,
    ACCOUNT_SET_LOGIN_TRUE,
    initialStateAccount,
    ACCOUNT_SET_LOGIN_FALSE,
}   from '../constants/constants';

export default function reducerAccount(state = initialStateAccount, action) {
    switch (action.type) { 
        
        case ACCOUNT_ADD_ARR:
            return {
                ...state,
                accounts: action.payload.arr
            }
        case ACCOUNT_LOGIN:
            return {
                ...state,
                userlogin: action.payload.userinfo,
                isLogin: true
            }
        case ACCOUNT_LOGOUT:
            localStorage.removeItem('account');
            return {
                ...state,
                userlogin: null,
                isLogin: false
            }
        case ACCOUNT_TOGGLE_LOGIN:
            return {
                isLogin: !state.isLogin
            }
        case ACCOUNT_SET_LOGIN_TRUE:
            return {
                ...state,
                isLogin: true
            }
        case ACCOUNT_SET_LOGIN_FALSE:
            return {
                ...state,
                isLogin: false
            }
        default:
            return state; 
    }
}

