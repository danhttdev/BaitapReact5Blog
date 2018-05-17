import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { 
    at_account_logout,
    at_account_login
} from '../actions/actionAccount';
class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            userlogin: null,
        }
    }
    logout = (props) => {
        this.props.at_account_logout();
    }
    signup = () =>{
        this.props.at_account_logout();
    }
    componentWillMount(){
        if (localStorage.getItem('account') !== null){
            this.props.at_account_login(JSON.parse(localStorage.getItem('account')));
        }
        if (this.props.isLogin){
            this.setState({
                userlogin: {...this.props.userlogin}
            })
        }
    }
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className='navbar-brand'>MyBlog.net</Link>

                    </div>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to='/newslatest' className='navbar-brand'>Tin mới</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='navbar-brand '>Liên hệ</Link>
                            </li>
                            {
                                this.props.isPermit?'':<li>
                                                            <i className="fa fa-spinner fa-spin waiting" > </i> 
                                                        </li>
                            }
                            
                           
                        </ul>
                        <div className="navbar-right">
                            {
                                this.props.isLogin?<Link to={'/contact/'+(this.props.userlogin?this.props.userlogin.id:'')}>{this.props.userlogin?<img alt='' className={this.props.userlogin.gender===0?'avatar-female':'avatar-male'}/>:''}
                                Chào {this.props.userlogin===null?'':this.props.userlogin.fullname }
                                 </Link>
                                :<Link to='/login' className="btn btn-warning navbar-btn btn-nav">Đăng nhập</Link>
                            }
                            <Link to='/signup' className="btn btn-info navbar-btn btn-nav" onClick={this.signup}>Đăng kí</Link>
                            <button 
                                className="btn btn-default dropdown-toggle btnoption" 
                                type="button" 
                                id="dropdownMenu1" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="true"
                            >
                            <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                {
                                    this.props.isLogin?<li><a onClick={this.logout}>Đăng xuất</a></li>:''
                                    
                                }
                                {
                                    this.props.isLogin?<li><Link to='/updateaccount'>Thiết đặt</Link></li>:''
                                    
                                }
                                {
                                    this.props.isLogin?<li role="separator" className="divider"></li>:''
                                }
                                <li><a >Về chúng tôi</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </nav>
        );
  }
}

function MapStateToProps(state){
    return {
        isLogin: state.reducerAccount.isLogin,
        userlogin: state.reducerAccount.userlogin,
        isPermit: state.reducerCommon.isPermit
    }
}
const MapDispatchToProps = {
    at_account_logout,
    at_account_login    
}
export default connect(MapStateToProps, MapDispatchToProps)(Navigation);