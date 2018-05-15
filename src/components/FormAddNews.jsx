import React, { Component } from 'react';
import { atx_news_add } from '../actions/actionNews';
import {connect} from 'react-redux';
import { getDate } from '../function';

class FormAddNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:'',
            iduser:'',
            date:'',
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
        this.onCancel();
        this.props.atx_news_add({   iduser: parseInt(this.props.iduser,10),
                                    title:this.state.title,
                                    content:'<pre>'.concat(this.state.content).concat('</pre>'), 
                                    date:getDate(), 
                                    fullname:this.props.fullname});
       
    }
    onCancel = () => {
        this.setState({
            title:'',
            content:''
        })
        console.log('eeed');
    }
    render() {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail rowpost ">
                        <form onSubmit={this.onSubmit}>
                            <label htmlFor="">Tiêu đề</label>
                            <textarea 
                                className="form-control comment" 
                                rows="1"
                                name='title'
                                required
                                value={this.state.title}
                                onChange={this.onChange}
                            ></textarea>
                            <label htmlFor="">Nội dung</label>
                            <textarea 
                                className="row3 " 
                                rows="3" 
                                name='content'
                                required
                                value={this.state.content}
                                onChange={this.onChange}
                            ></textarea>
                            <button  className="btn btn-primary" type='submit'  >Đăng</button>
                            <button  className="btn btn-danger btnoption" onClick={this.onCancel}>Hủy</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
function mapStateToProps(state) {
    return {
      iduser: state.reducerAccount.userlogin.id,
      fullname: state.reducerAccount.userlogin.fullname
    };
}
  
const mapDispatchToProps = {
    atx_news_add
}
  
export default connect(mapStateToProps,mapDispatchToProps)(FormAddNews);