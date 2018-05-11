import React, { Component } from 'react';
import FormLogin from '../../components/FormLogin';
class Login extends Component {
    componentWillMount(){
        if (localStorage.getItem('username') !== null)
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <p className='text-center'>Chào mừng bạn đến với trang đăng nhập, hãy khám phá bây giờ.</p>
                <FormLogin history2={this.props.history}/>
            </div>
        );
    }
}

export default Login;
