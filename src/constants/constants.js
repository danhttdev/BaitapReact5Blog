export const initialStateCommon = {
  isPermit:true,
  isLoaded:false,
  path:[
    {path:"/", name: "MyBlog.net"}, 
    {path:"/newslatest", name: "Tin mới"}, 
    {path:"/contact", name: "Liên hệ"}, 
    {path:"/login", name: "Đăng nhập"}, 
    {path:"/signup", name: "Đăng kí"}
  ] 
}
export const initialStateAccount = {
  userlogin:{
    idlogin: "danh",
    username: "",
    password: ""
  },
  accounts: [
    {
      id:'danh',
      fullname: 'Trieu Tan Danh',
      address:'32 Ngo Quyen',
      phone: "45234634",
      gender: 1
    },
    {
      id:'ninh',
      fullname: 'Le phuoc ninh',
      address:'32 Ngo Quyen',
      phone: "45234634",
      gender: 1
    },
    {
      id:'phung',
      fullname: 'nguyen van phung',
      address:'32 Ngo Quyen',
      phone: "45234634",
      gender: 1
    },
    {
      id:'tinh',
      fullname: 'Tinh phan',
      address:'32 Ngo Quyen',
      phone: "45234634",
      gender: 1
    },
    {
      id:'huy',
      fullname: 'Huy Le',
      address:'32 Ngo Quyen',
      phone: "45234634",
      gender: 1
    },
  ],
  isLogin:false,
};
export const initialStateNews = {
  
  news: [
    { idnews:'idnew1',
      title:'facebook1',
      content: 'Trong thời gian gần đây 1',
      iduser:'1',
      fullname: 'Danh Tấn',
      date:'11/2/2016',
      views:12,
      arrLikes:[
        { idlike:'1',
          iduser:'1',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'2',
          iduser:'2',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'3',
          iduser:'3',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'4',
          iduser:'4',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
      ],
      arrComments: [
        { idcomment:'1',
          iduser:'2',
          fullname: 'Ninh',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'4',
          iduser:'3',
          fullname: 'Phung',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'5',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
      ]
    },
    { idnews:'2',
      title:'facebook da tao xoxo 2',
      content: 'Trong thời gian gần đây, nhất là sau vụ Facebook làm lộ dữ liệu của 50 triệu người dùng thì hàng loạt fanpage hùa nhau dụ người dùng tương tác bằng cách comment bff để xem nó có nhảy ra hiệu ứng không, nếu có thì tài khoản của bạn an toàn, còn nếu không …Trong thời gian gần đây, nhất là sau vụ Facebook làm lộ dữ liệu của 50 triệu người dùng thì hàng loạt fanpage hùa nhau dụ người dùng tương tác bằng cách comment bff để xem nó có nhảy ra hiệu ứng không, nếu có thì tài khoản của bạn an toàn, còn nếu không …',
      iduser:'1',
      date:'23/2/2016',
      views:123,
      fullname: 'Ninh',
      arrLikes:[
        { idlike:'5',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'6',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'7',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'8',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
      ],
      arrComments: [
        { idcomment:'6',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'7',
          iduser:'2',
          fullname: 'Ninh',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'9',
          iduser:'2',
          fullname: 'Ninh',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'10',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
      ]
    },
    { idnews:'3',
      title:'facebook da tao xoxo 3',
      content: 'khong co gi quy hon doc lap tu do hanh phuc',
      iduser:'danh',
      date:'3/2/2016',
      fullname: 'Danh Tấn',
      views:123,
      arrLikes:[
        { idlike:'9',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'10',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'11',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'12',
          iduser:'121222',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
      ],
      arrComments: [
        { idcomment:'11',
          iduser:'5',
          fullname: 'tinh',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'12',
          iduser:'2',
          fullname: 'Ninh',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
          { idcomment:'13',
          iduser:'3',
          fullname: 'Phung',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'14',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'15',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'13',
        iduser:'3',
        fullname: 'Phung',
        content:'chuc mung nam moi',
        date:'12/2/2016'
        },
        { idcomment:'14',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'15',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
      ]
    },
    { idnews:'4',
      title:'facebook da tao xoxo 4',
      content: 'khong co gi quy hon doc lap tu do hanh phuc',
      iduser:'phung',
      date:'13/2/2016',
      fullname: 'Phung',
      views:123,
      arrLikes:[
        { idlike:'13',
          iduser:'2',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'14',
          iduser:'1',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'15',
          iduser:'5',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
        { idlike:'16',
          iduser:'4',
          fullname:'Danh Tan',
          date:'20/3/2018'
        },
      ],
      arrComments: [
        { idcomment:'16',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'17',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
          { idcomment:'18',
          iduser:'2',
          fullname: 'Ninh',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'19',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
        { idcomment:'20',
          iduser:'1',
          fullname: 'Danh Tấn',
          content:'chuc mung nam moi',
          date:'12/2/2016'
        },
      ]
    },
  
  ],

};

export const ACCOUNT_TOGGLE_LOGIN       = 'ACCOUNT_TOGGLE_LOGIN';
export const ACCOUNT_LOGIN              = 'ACCOUNT_LOGIN';
export const ACCOUNT_SET_LOGIN_TRUE     = 'ACCOUNT_SET_LOGIN_TRUE';
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
