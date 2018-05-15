import React, { Component } from 'react';
import { getDate } from '../function';
import { atx_news_edit_a_news} from '../actions/actionNews';
import {connect} from 'react-redux';

class FormEditNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            content:'',
            date:''
        }
    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log("value");
        console.log(value);
        this.setState({
            [name]:value
        })
    }
    onSubmit= (e) => {
        e.preventDefault();
        // this.onCancel();
        // this.props.atx_news_add({   iduser: parseInt(this.props.iduser,10),
        //                             title:this.state.title,
        //                             content:'<pre>'.concat(this.state.content).concat('</pre>'), 
        //                             date:getDate(), 
        //                             fullname:this.props.fullname});
        if (this.state.title !== "" && this.state.content !== ""){
            const date = getDate();
            this.setState({
                date: date
            })
            const cb = (e) => {
                this.props.history.push('/');
            }
            this.props.atx_news_edit_a_news({...this.state, date }, cb);
        }
        else
        console.log("title: "+this.state.title+" , content: "+ this.state.content);
    }
    onCancel = () => {
        // this.setState({
        //     title:'',
        //     content:''
        // })
        // console.log('eeed');
        this.props.history.push('/');
    }
    onReset = () => {
        this.setState({
            title: '',
            content:''
        })
    }
    componentWillMount(){
        this.setState({
            id: this.props.idNews,
            title: this.props.title,
            content: this.props.content
        })
    }
    render() {

        return (
            <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="thumbnail row2">
                            <form onSubmit={this.onSubmit}>
                                <legend>Sửa bài đăng</legend>
                                <b className="detail">Tôi</b><span className="detail"> đã đăng vào </span><i className="detail">{ this.props.date } có {this.props.views} lượt xem</i>
                                <hr />
                                <div className="form-group">
                                    <label htmlFor="">Tiêu đề</label>
                                    <input
                                        name="title"
                                        type="text" 
                                        className="form-control" 
                                        id="" 
                                        value={ this.state.title} 
                                        onChange={this.onChange}
                                    />
                                    <label htmlFor="">Nội dung</label>
                                    <textarea 
                                        name="content"
                                        rows={15} 
                                        type="text" 
                                        className="form-control" 
                                        id="" 
                                        value={ this.state.content} 
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Sửa</button>
                                <button type="reset" className="btn btn-danger" onClick={this.onReset}> Xóa</button>
                                <button type="button" className="btn btn-warning" onClick={this.onCancel}>Hủy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

// export default FormEditNews;
// function mapStateToProps(state) {
//     return {
//       fullname: state.reducerAccount.userlogin.fullname
//     };
// }
  
const mapDispatchToProps = {
    atx_news_edit_a_news
}
  
export default connect(null,mapDispatchToProps)(FormEditNews);