import {
    initialStateNews,
    NEWS_ADD,
    NEWS_ADD_ARR,
    NEWS_ADD_COMMENT,
    NEWS_DELETE,
    NEWS_DELETE_COMMENT,
    NEWS_EDIT,
    NEWS_UNLIKE,
    NEWS_LIKE,
} from "../constants/constants";

export default function reducer(state = initialStateNews, action) {
    switch (action.type) { 
        case NEWS_ADD:
            return {
                ...state,
                news: [...state.news, {...action.payload.news}]
            }
        case NEWS_ADD_ARR:
            return {
                ...state,
                news: action.payload.arr
            }        
      
        case NEWS_ADD_COMMENT:
            return {
                ...state,
                news: state.news.map((item) => {
                    const it = item;
                    if (item.idnews === action.payload.comment.idnews) it.arrComments.push(action.payload.comment);
                    return it;
                })
                
            }        
        case NEWS_DELETE:
            return {
                ...state,
                news: state.news.filter((item) => {
                    if (item.idnews === action.payload.idnews ) return false;
                    return true;
                })
            }        
        case NEWS_DELETE_COMMENT:
            return {
                ...state,
                news: state.news.map((item) => {
                    const it = {...item};
                    if (item.idnews === action.payload.idnews){
                        const arrnew = item.arrComments.filter((item2) =>{
                            if (item2.idcomment === action.payload.idcomment) return false;
                            return true;
                        })
                        it.arrComments = [...arrnew];
                        return it;
                    }
                    return it;
                })
            }        
        case NEWS_EDIT:
            return {
                ...state,
                news: state.news.map((item) => {
                    if (item.idnews === action.payload.news.id) return action.payload.news;
                    return item; 
                })                
            }        
        case NEWS_UNLIKE:
            const news = state.news.map((item) => {
                if (item.idnews === action.payload.unlike.idnews){
                    const arr_2 = item.arrLikes.filter((itemlike) => {
                        if (itemlike.idlike === action.payload.unlike.idnewsForUnlike){
                            return false;
                        } 
                        return true;
                    })
                    return {
                        ...item,
                        arrLikes: arr_2,
                    }
                }
                return item;
            })
            return {
                ...state,
                news,
            }   
        case NEWS_LIKE:
            const arr = state.news.map((item) => {
                let item2 = {...item};
                if (item.idnews === action.payload.like.idnews){
                    item2.arrLikes.push(action.payload.like);
                }
                return item2;
            })
            return {
                ...state,
                news: [...arr]
            }       
        default:
            return state;
    }
}

