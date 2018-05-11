import {
    NEWS_ADD,
    NEWS_ADD_ARR,
    NEWS_ADD_COMMENT,
    NEWS_DELETE,
    NEWS_DELETE_COMMENT,
    NEWS_EDIT,
    NEWS_LIKE,
    NEWS_UNLIKE,
    NEWS_TOGGLE_LIKE
}   from '../constants/constants';

export function at_news_add(news) {
    return {
        type: NEWS_ADD,
        payload: {
            news
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
