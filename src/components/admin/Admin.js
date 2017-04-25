/**
 * Created by ck on 19/04/2017.
 */


import React from 'react';
import AdminLoginCheck from './AdminLoginCheck';
import {AppConst} from '../../lib/AppConst';
import '../../css/Admin.css';
export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', abstract: '', category: '', content: ''};
    }

    handleChange(event, stateName) {
        let s = {};
        s[stateName] = event.target.value;
        this.setState(s);
    }

    async save() {
        if (this.state.title === '' || this.state.category === '' || this.state.abstract === '' || this.state.content === '') return;
        try {
            let response = await fetch(`${AppConst.API_URL}/blogs?rd=${Math.random()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: JSON.stringify({
                    title: this.state.title,
                    category: this.state.category,
                    abstract: this.state.abstract,
                    content: this.state.content
                })
            });
            let result = await response.json();
            if (result.code === 200) {
                alert('保存成功');
            } else {
                alert(result.error);
            }
        } catch (err) {
            console.log(err);
        }


    }

    render() {
        return (
            <div>
                <AdminLoginCheck />
                <div className="Admin">
                    <div className="row">
                        <label className="lbl col col20">标题</label>
                        <div className="col col80">
                            <input className="ipt" type="text" value={this.state.title} onChange={(event) => {
                                this.handleChange(event, 'title')
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <label className="lbl col col20">分类</label>
                        <div className="col col80">
                            <input className="ipt" type="text" value={this.state.category} onChange={(event) => {
                                this.handleChange(event, 'category')
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <label className="lbl col col20">摘要</label>
                        <div className="col col80">
                            <textarea cols="5" className="ipt abstract" value={this.state.abstract}
                                      onChange={(event) => {
                                          this.handleChange(event, 'abstract')
                                      }}/>
                        </div>
                    </div>
                    <div className="row">
                        <label className="lbl col col20">正文</label>
                        <div className="col col80">
                            <textarea cols="5" className="ipt content" value={this.state.content} onChange={(event) => {
                                this.handleChange(event, 'content')
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input className="btn btn-main pull-right" type="button" value="保存"
                                   onClick={() => {
                                       this.save.bind(this)();
                                   }}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}