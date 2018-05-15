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

export function at_news_add_comment( comment) {
    return {
        type: NEWS_ADD_COMMENT,
        payload: {
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

export function at_news_like(like) {
    return {
        type: NEWS_LIKE,
        payload: {
            like
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
export function at_news_unlike(unlike) {
    return {
        type: NEWS_UNLIKE,
        payload: {
            unlike
        }
    }
}
export function atx_news_get_a_news(id ,cb){
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;
            const a = {idNewGetFull:parseInt(id, 10)};
            console.log("islogin 4: "+ getStore().reducerAccount.isLogin);
            axios.post(link, a)
            .then((res)=> {
                dispatch(at_common_toggle_permit());
                if (res.data) {
                    console.log("islogin 4: "+ getStore().reducerAccount.isLogin);
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
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;

            axios.post(link, comment)
            .then((res)=> {

                dispatch(at_common_toggle_permit());
                if (res.data) {
                    const cmt = {
                        idcomment: res.data.id,
                        idnews: comment.idNewsComment,
                        iduser:comment.iduser,
                        content: comment.content,
                        date: comment.date,
                        fullname: comment.fullname
                    }

                    cb(cmt);
                    dispatch(at_news_add_comment(cmt));
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}

export function atx_news_like(like ,cb){
    console.log("like action");
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;

            axios.post(link, like)
            .then((res)=> {

                dispatch(at_common_toggle_permit());
                if (res.data) {
               
                    const like2 = {
                        idlike: res.data.id,
                        iduser: like.iduser,
                        date: like.date,
                        fullname: like.fullname,
                        idnews: like.idnewsForLike
                    }
                    console.log(like2);
                    dispatch(at_news_like(like2));
                    cb(like2);
                }
                else {
                }
            }).catch(error => {
                dispatch(at_common_toggle_permit());
            });
        }
    }
}
export function atx_news_unlike(unlike ,cb){
    console.log("unlike action");
    return (dispatch, getStore) => {
        if (getStore().reducerCommon.isPermit){
            dispatch(at_common_toggle_permit());
            let link=`${HOST}`;

            axios.post(link, unlike)
            .then((res)=> {

                dispatch(at_common_toggle_permit());
                if (res.data) {
                    dispatch(at_news_unlike(unlike));

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