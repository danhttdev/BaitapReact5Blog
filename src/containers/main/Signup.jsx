import React, { Component } from 'react';
import FormSignup from '../../components/FormSignup';

class Signup extends Component {
    render() {
        return (
            <div>
                <p className='text-center'>Chào mừng bạn đến với trang đăng kí, hãy khám phá bây giờ.</p>
                <FormSignup history2={this.props.history}/>
            </div>
        );
    }
}

export default Signup;
