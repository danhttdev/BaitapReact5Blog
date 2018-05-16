export const initialStateCommon = {
  isPermit:true,
  isLoaded:false,
}
export const initialStateAccount = {
  userlogin:{
    idlogin: "",
    username: "",
    password: "",
    gender:0
  },
  accounts: [
  ],
  isLogin:false,
};
export const initialStateNews = {
  
  news: [
    { idnews:'idnew1',
      title:'',
      content: 'ĐANG LOAD DỮ LIỆU',
      iduser:'1',
      fullname: '',
      date:'',
      views:0,
      arrLikes:[
      ],
      arrComments: [
      ]
    },
  ],

};

export const ACCOUNT_TOGGLE_LOGIN       = 'ACCOUNT_TOGGLE_LOGIN';
export const ACCOUNT_LOGIN              = 'ACCOUNT_LOGIN';
export const ACCOUNT_SET_LOGIN_TRUE     = 'ACCOUNT_SET_LOGIN_TRUE';
export const ACCOUNT_SET_LOGIN_FALSE    = 'ACCOUNT_SET_LOGIN_FALSE';
export const ACCOUNT_LOGOUT             = 'ACCOUNT_LOGOUT';
export const ACCOUNT_ADD_ARR            = 'ACCOUNT_ADD_ARR';
export const NEWS_LIKE                  = 'NEWS_LIKE';
export const NEWS_UNLIKE                = 'NEWS_UNLIKE';
export const NEWS_ADD                   = 'NEWS_ADD';
export const NEWS_DELETE                = 'NEWS_DELETE';
export const NEWS_EDIT                  = 'NEWS_EDIT';
export const NEWS_ADD_COMMENT           = 'NEWS_ADD_COMMENT';
export const NEWS_DELETE_COMMENT        = 'NEWS_DELETE_COMMENT';
export const NEWS_ADD_ARR               = 'NEWS_ADD_ARR'; 
export const NEWS_TOGGLE_LIKE           = 'NEWS_TOGGLE_LIKE'; 
export const COMMON_TOGGLE_PERMIT       = 'COMMON_TOGGLE_PERMIT';
export const COMMON_LOADED              = 'COMMON_LOADED';
export const UPDATE_COMPLETED           = 'UPDATE_COMPLETED';



export const TOGGLE_PERMIT       = 'TOGGLE_PERMIT';
export const TOGGLE_LOGIN        = 'TOGGLE_LOGIN';
export const GET_NEWS            = 'GET_NEWS';
export const LOGOUT_COMPLETED    = 'LOGOUT_COMPLETED';
export const PASSWORD_NO_MATCH   = 'Mật khẩu không khớp';
export const LIKE                = 'LIKE';
export const DISLIKE             = 'DISLIKE';
export const ADD_NEWS            = 'ADD_NEWS';
export const LOGIN_COMPLETED     = 'LOGIN_COMPLETED';
export const LOGIN_UNCOMPLETED   = 'Đăng nhập thất bại';
export const SIGNUP_COMPLETED    = 'SIGNUP_COMPLETED';
export const SIGNUP_UNCOMPLETED  = 'SIGNUP_UNCOMPLETED';
export const MSG1                = 'Đăng kí thành công, vui lòng đăng nhập';
export const MSG2                = 'Đăng kí không thành công';
export const DELETE_NEWS         = 'DELETE_NEWS';
export const LOGIN               = 'LOGIN';
export const EDIT_NEWS           = 'EDIT_NEWS';
export const HOST                = "http://localhost/accounts_redux_5.php";
