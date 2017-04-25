/**
 * Created by ck on 19/04/2017.
 */


import React from 'react';
import AdminLoginCheck from './AdminLoginCheck';
import {AppConst} from '../../lib/AppConst';
import fecha from 'fecha';
import '../../css/Admin.css';
export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            abstract: '',
            category: '',
            content: '',
            search: '',
            blogs: [],
            showForm: false
        };
    }

    handleChange(event, stateName) {
        let s = {};
        s[stateName] = event.target.value;
        this.setState(s);
    }

    async getBlogs() {
        try {
            let response = await fetch(`${AppConst.API_URL}/blogsearch?pageIndex=1&pageSize=5&key=${this.state.search}&rd=${Math.random()}`,
                {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    },
                });
            let result = await response.json();
            if (result.code === 200) {
                this.setState({
                    blogs: result.data
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    async save() {
        if (this.state.title === '' || this.state.category === '' || this.state.abstract === '' || this.state.content === '') return;
        try {
            let method = this.state.id === '' ? 'POST' : 'PATCH';
            let url = AppConst.API_URL + '/blogs';
            if (this.state.id !== '') url += '/' + this.state.id;
            url += `?rd=${Math.random()}`;
            let response = await fetch(url, {
                method: method,
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
            this.setState({showForm: false});
            if (result.code === 200) {
                alert('保存成功');
                this.getBlogs();
            } else {
                alert(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    }

    new() {
        this.setState({
            id: '',
            title: '',
            abstract: '',
            category: '',
            content: '',
            showForm: true
        });
    }

    edit(blog) {
        this.setState({
            id: blog._id,
            title: blog.title,
            abstract: blog.abstract,
            category: blog.category,
            content: blog.content,
            showForm: true
        });
    }

    async del(id) {
        if (!window.confirm('确认删除吗?')) return;
        try {
            let response = await fetch(`${AppConst.API_URL}/blogs/${id}?rd=${Math.random()}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    },
                });
            let result = await response.json();
            this.setState({showForm: false});
            if (result.code === 200) {
                alert('删除成功');
                this.getBlogs();
            } else {
                alert(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        let searchResult = null;
        if (this.state.blogs.length > 0) {
            searchResult = <table className="table">
                <thead>
                <tr>
                    <th>标题</th>
                    <th style={{width: '100px'}}>发布日期</th>
                    <th style={{width: '100px'}}></th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.blogs.map((x) => {
                        return <tr key={x._id}>
                            <td>{x.title}</td>
                            <td>{fecha.format(new Date(x.creationDate), 'YYYY-MM-DD')}</td>
                            <td><i onClick={() => {
                                this.edit(x);
                            }} className="fa fa-edit"></i> | <i onClick={() => {
                                this.del(x._id);
                            }} className="fa fa-trash"></i></td>
                        </tr>
                    })
                }
                </tbody>

            </table>;
        }
        return (
            <div>
                <AdminLoginCheck />
                <div className="Admin">
                    <div className="BlogSearch">
                        <div className="row">
                            <div className="col col60">
                                <input className="ipt" type="text" value={this.state.search} onChange={(event) => {
                                    this.handleChange(event, 'search')
                                }}/>
                            </div>
                            <div className="col col20">
                                <button className="btn btn-main pull-right"
                                        onClick={() => {
                                            this.new();
                                        }}>新增
                                </button>
                                <button className="btn btn-main pull-right"
                                        onClick={() => {
                                            this.getBlogs();
                                        }}>查询
                                </button>
                            </div>
                        </div>
                        {searchResult}
                    </div>
                    <div className="BlogForm" style={{display: this.state.showForm ? 'block' : 'none'}}>
                        <hr />
                        <div className="row">
                            <label className="lbl col col20">ID</label>
                            <div className="col col80">
                                <input className="ipt" type="text" value={this.state.id} disabled/>
                            </div>
                        </div>
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
            </div>
        );
    }
}