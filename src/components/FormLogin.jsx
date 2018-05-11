import React, { Component } from 'react';
import {
    atx_login
} from '../actions/actionAccount'
import {
    atx_getdata
}   from '../actions/actionCommon';
import {connect} from 'react-redux';

class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    onSubmit= (e) => {
        e.preventDefault();
        let cb = (account) => {
            // localStorage.setItem('username',this.state.username);
            // localStorage.setItem('password', this.state.password);
            // localStorage.setItem('idlogin', account.id);
            // console.log(account);
            localStorage.setItem('account', JSON.stringify(account));
            const dir = () => {
                this.props.history2.push('/');
            }
            dir();
            
        }
        this.props.atx_login(this.state.username, this.state.password, cb);
        //this.props.atx_getdata();

    }
    
    render() {
        return (
            <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="thumbnail row2">
                            <form onSubmit={this.onSubmit}>
                                <legend>Đăng nhập</legend>
                                <div className="form-group">
                                    <label htmlFor="">Tên đăng nhập</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Input field"
                                        name='username'
                                        required
                                        value={this.state.username}
                                        onChange={this.onChange}/>
                                    <label htmlFor="">Mật khẩu</label>
                                    <input
                                        className="form-control" 
                                        placeholder="Input field"
                                        name='password'
                                        type='password'
                                        required
                                        value={this.state.password}
                                        onChange={this.onChange}/>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary">ĐĂNG NHẬP</button>
                            </form>
                        </div>
                    </div>                
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    atx_login,
    atx_getdata
}
  
export default connect(null,mapDispatchToProps)(FormLogin);