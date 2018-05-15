import React, { Component } from 'react';
import CardAccount from '../../components/CardAccount';
import { connect } from 'react-redux';


class Contact extends Component {
    render() {
        return (
            <div>
                <p className='text-center'>Nhà phá triển</p>
                <CardAccount 
                    id={this.props.userlogin.id}
                    username={this.props.userlogin.username}
                    password={this.props.userlogin.password}
                    fullname={this.props.userlogin.fullname}
                    address={this.props.userlogin.address}
                    phone={this.props.userlogin.phone}
                    gender={this.props.userlogin.gender}
                />
            </div>
        );
    }
}

// export default Contact;

function MapStateToProps(state){
    return {
        userlogin: state.reducerAccount.userlogin
    }
}

const MapDispatchToProps = {

}

export default connect(MapStateToProps,MapDispatchToProps)(Contact);