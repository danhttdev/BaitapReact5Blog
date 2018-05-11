import React, { Component } from 'react';


class FormAddNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
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
        console.log(this.state);
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

export default FormAddNews;
