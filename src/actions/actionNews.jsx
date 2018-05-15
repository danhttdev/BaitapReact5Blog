import {
    NEWS_ADD,
    NEWS_ADD_ARR,
    NEWS_ADD_COMMENT,
    NEWS_DELETE,
    NEWS_DELETE_COMMENT,
    NEWS_EDIT,
    NEWS_LIKE,
    NEWS_UNLIKE,
    NEWS_TOGGLE_LIKE,
    HOST
}   from '../constants/constants';

import {
    at_common_toggle_permit
}   from './actionCommon';
import axios from 'axios';

export function at_news_add(news) {
    return {
        type: NEWS_ADD,
        payload: {
            news
        }
    }
}
export function atx_news_add(news){
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            axios.post(link, news)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                if (res.data) {
                    const news2={...news, idnews: res.data.id, arrLikes:[],arrComments:[],views:0};
                    dispatch(at_news_add(news2));
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}
export function atx_news_delete(news){
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            axios.post(link, news)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                if (res.data) {
                  //  const news2={...news, idnews: res.data.id, arrLikes:[],arrComments:[],views:0};
                   // dispatch(at_news_add(news2));
                   dispatch(at_news_delete(news.idDelete));
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}
export function at_news_add_arr(arr) {
    return {
        type: NEWS_ADD_ARR,
        payload: {
            arr
        }
    }
}

export function at_news_add_comment(idcomment, comment) {
    return {
        type: NEWS_ADD_COMMENT,
        payload: {
            idcomment,
            comment
        }
    }
}
export function at_news_delete(idnews) {
    return {
        type: NEWS_DELETE,
        payload: {
            idnews
        }
    }
}

export function at_news_delete_comment(idnews, idcomment) {
    return {
        type: NEWS_DELETE_COMMENT,
        payload: {
            idnews,
            idcomment
        }
    }
}
export function at_news_edit(news) {
    return {
        type: NEWS_EDIT,
        payload: {
            news
        }
    }
}

export function at_news_like(idnews,iduser,idlike,date) {
    return {
        type: NEWS_LIKE,
        payload: {
            idnews,
            iduser,
            idlike,
            date
        }
    }
}

export function at_news_toggle_like(idnews,iduser,idlike,date) {
    return {
        type: NEWS_TOGGLE_LIKE,
        payload: {
            idnews,
            iduser,
            idlike,
            date
        }
    }
}
export function at_news_unlike(idnews,iduser) {
    return {
        type: NEWS_UNLIKE,
        payload: {
            idnews,
            iduser
        }
    }
}
export function atx_news_get_a_news(id ,cb){
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            const a = {idNewGetFull:parseInt(id, 10)};
            axios.post(link, a)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                if (res.data) {
                    cb(res.data.news);
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}
// export function atx_news_get_a_news(id ,cb){
//     return (dispatch, getStore) => {
//         if (getStore().reducerCommon.isPermit){
//             dispatch(at_common_toggle_permit());
//             let link=`${HOST}`;
//             const a = {idNewGetFull:parseInt(id, 10)};
//             axios.post(link, a)
//             .then((res)=> {
//                 dispatch(at_common_toggle_permit());
//                 if (res.data) {
//                     cb(res.data.news);
//                 }
//                 else {
//                 }
//             }).catch(error => {
//                 dispatch(at_common_toggle_permit());
//             });
//         }
//     }
// }

export function atx_news_edit_a_news(news ,cb){
    console.log("aaaa");
    console.log(news);
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            //const a = {idNewGetFull:parseInt(id, 10)};
            console.log("bbbbb");

            axios.post(link, news)
            .then((res)=> {
                console.log("cccccc");

                dispatch(at_common_toggle_permit());
                if (res.data) {
                    cb(res.data);
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}

export function atx_news_add_comment(comment ,cb){
    console.log("add comment");
    console.log(comment);
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            //const a = {idNewGetFull:parseInt(id, 10)};
            console.log("bbbbb");

            axios.post(link, comment)
            .then((res)=> {
                console.log("cccccc");

                dispatch(at_common_toggle_permit());
                if (res.data) {
                    cb(res.data);
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}