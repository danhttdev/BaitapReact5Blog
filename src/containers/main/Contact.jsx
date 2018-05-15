import React, { Component } from 'react';
import CardAccount from '../../components/CardAccount';
import { connect } from 'react-redux';
import { atx_getdata } from '../../actions/actionCommon';

const uuid = require('uuid');

class Contact extends Component {
    componentWillMount(){
        this.props.atx_getdata();
        
    }
    render() {
        const idindex = window.location.pathname.substring(9);
        console.log(idindex);
        console.log(this.props.accounts);
        let tag = '';
        if ( idindex === "")
        return (
            <div>
                <div className="row clearfix">
                    <p className='text-center'>Tài khoản của tôi</p><br />
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        {   this.props.userlogin.idlogin===''?'':<CardAccount 
                                id={this.props.userlogin.id}
                                username={this.props.userlogin.username}
                                fullname={this.props.userlogin.fullname}
                                address={this.props.userlogin.address}
                                phone={this.props.userlogin.phone}
                                gender={this.props.userlogin.gender}
                            />
                        }
                    </div>
                </div>
                <div className="row clearfix">
                    <p className='text-center'>Danh sách thành viên</p><br />
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {
                            this.props.accounts.map((item) => {
                                return  <CardAccount 
                                            key={uuid()}
                                            id={item.id}
                                            username={item.username}
                                            fullname={item.fullname}
                                            address={item.address}
                                            phone={item.phone}
                                            gender={item.gender}
                                            history={this.props.history}
                                        />
                            })
                        }
                    </div>
                    
                </div>
            </div>
        );
        else return (
                <div className="row clearfix">
                    <p className='text-center'>Danh sách thành viên</p><br />
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {
                            this.props.accounts.map((item) => {
                                if (item.id === idindex || parseInt(item.id)===parseInt(idindex)) return  <CardAccount 
                                            key={uuid()}
                                            id={item.id}
                                            username={item.username}
                                            fullname={item.fullname}
                                            address={item.address}
                                            phone={item.phone}
                                            gender={item.gender}
                                            history={this.props.history}
                                        />
                                else return ''
                            })
                        }
                    </div>
                </div>
        );
    }
}

// export default Contact;

function MapStateToProps(state){
    return {
        userlogin: state.reducerAccount.userlogin,
        accounts: state.reducerAccount.accounts
    }
}

const MapDispatchToProps = {
    atx_getdata
}

export default connect(MapStateToProps,MapDispatchToProps)(Contact);