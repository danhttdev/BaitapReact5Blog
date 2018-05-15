import {
    initialStateNews,
    NEWS_ADD,
    NEWS_ADD_ARR,
    NEWS_ADD_COMMENT,
    NEWS_DELETE,
    NEWS_DELETE_COMMENT,
    NEWS_EDIT,
    NEWS_UNLIKE,
    NEWS_TOGGLE_LIKE,
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
                    if (item.idnews === action.payload.idcomment) it.arrComments.push(action.payload.comment);
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
        case NEWS_TOGGLE_LIKE:
            console.log("add");
            return {
                news: state.news.map((item) => {
                    const it = {...item};
                    if ( item.idnews === action.payload.idnews ){
                        const arrl = [...item.arrLikes];
                        let check = true;
                        item.arrLikes.forEach((item2, index) => {
                            if (item2.iduser === action.payload.iduser) {
                                arrl.splice(index,1);
                                check = false;
                            }
                            if (check) arrl.push({
                                idlike:action.payload.idlike,
                                iduser:action.payload.iduser,
                                date: action.payload.date
                            })
                            
                        })
                        it.arrLikes = [...arrl];
                        return it;
                    }
                    return item;
                })
            }
        case NEWS_UNLIKE:
            return {
                
            }          
        default:
            return state;
    }
}

