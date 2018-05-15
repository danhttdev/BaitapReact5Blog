// import React, { Component } from 'react';
// import FormLogin from '../components/FormLogin';
// import FormSignup from '../components/FormSignup';
// import FormEditNews from '../components/FormEditNews';
// import FormAddNews from '../components/FormAddNews';
// import ItemNewsFull from './ItemNewsFull';
// import ItemHotRecent from './main/ItemHotRecent';
// import ListAccounts from '../components/ListAccounts';

// class Container extends Component {
//   render() {
//     return (
//         <div>
// <nav className="navbar navbar-inverse">
//     <div className="container">
//         <div className="navbar-header">
//             <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="menu">
//                 <span className="sr-only">Toggle navigation</span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//                 <span className="icon-bar"></span>
//             </button>
//             <a className="navbar-brand" >MyBlog.net</a>
//         </div>
//         <div className="collapse navbar-collapse" id="menu">
//             <ul className="nav navbar-nav">
//                 <li>
//                     <a >Tin mới</a>
//                 </li>
//                 <li>
//                     <a >Liên Hệ</a>
//                 </li>
//             </ul>

//             <div className="navbar-right">
//                 <button className="btn btn-danger navbar-btn btn-nav">Đăng kí</button>
//                 <button className="btn btn-info navbar-btn btn-nav">Đăng nhập</button>
//                 <button className="btn btn-default dropdown-toggle btn-nav" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//                     Tùy chọn
//                     <span className="caret"></span>
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
//                     <li><a >Đăng kí</a></li>
//                     <li><a >Đăng xuất</a></li>
//                     <li role="separator" className="divider"></li>
//                     <li><a >Về chúng tôi</a></li>
//                 </ul>
//             </div>
            
//         </div>
//     </div>
// </nav>
            
//             <div className="container">
//                 <FormAddNews />
//                 <ItemHotRecent />
//                 <FormLogin />
//                 <FormSignup />
//                 <FormEditNews /> 
//                 <ItemNewsFull />
//                 <ListAccounts />
//             </div>
//         </div>
//     );
//   }
// }

// export default Container;


import React, { Component } from 'react';
import Main from './Main';
// import { connect } from "react-redux";
import Navigation from './Navigation';
// import { at_account_login } from '../actions/actionAccount';
// import { atx_getdata  } from '../actions/actionCommon';

class Container extends Component {
  // componentWillMount(){
  //   if (localStorage.getItem('account') !== null){
  //     this.props.at_account_login(JSON.parse(localStorage.getItem('account')));
  //   }
  //   this.props.atx_getdata();
  // }
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}
// const MapDispatchToProps = {
//   at_account_login,
//   atx_getdata
// }

// export default connect(null, MapDispatchToProps)(Container);
export default Container;