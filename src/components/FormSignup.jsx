import React, { Component } from 'react';
import {
    atx_signup
} from '../actions/actionAccount'

import {connect} from 'react-redux';

class FormSignup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            repassword:'',
            fullname:'',
            address:'',
            phone:'',
            gender:1,
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
        if ( this.state.password === this.state.repassword){
            const cb = () => {
                this.props.history2.push("/login");
            }
            this.props.atx_signup(this.state, cb);
        } else {
            alert("Mật khẩu chưa khớp");
        }
    }
    render() {
    return (
        <div className="row ">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="thumbnail row2">
                        <form onSubmit={this.onSubmit}>
                            <legend>Đăng kí</legend>
                            <div className="form-group">
                                <label htmlFor="">Tên đăng nhập</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Input field"
                                    name='username'
                                    required
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="">Mật khẩu</label>
                                <input 
                                    className="form-control" 
                                    placeholder="Input field"
                                    name='password'
                                    type='password'
                                    required
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="">Nhập lại mật khẩu</label>
                                <input 
                                    className="form-control" 
                                    placeholder="Input field"
                                    name='repassword'
                                    type='password'
                                    required
                                    value={this.state.repassword}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="">Tên đầy đủ</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    laceholder="Input field"
                                    name='fullname'
                                    required
                                    value={this.state.fullname}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="">Địa chỉ</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Input field"
                                    name='address'
                                    required
                                    value={this.state.address}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="">Điện thoại</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Input field"
                                    name='phone'
                                    required
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                />
                                <label htmlFor="">Giới tính</label>
                                <select className="form-control" id="sel1" value={this.state.gender} name="gender" onChange={this.onChange}> 
                                    <option value={1}>Nam</option>
                                    <option value={0}>Nữ</option>
                                </select>

                            </div>
                            <button type="submit" className="btn btn-primary">ĐĂNG KÍ</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}


const mapDispatchToProps = {
    atx_signup
}
  
export default connect(null,mapDispatchToProps)(FormSignup);