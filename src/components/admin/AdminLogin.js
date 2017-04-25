/**
 * Created by ck on 19/04/2017.
 */
import React from 'react';
import 'whatwg-fetch';
import {hashHistory} from 'react-router';
import {AppConst} from '../../lib/AppConst';

export default class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', pwd: ''};
    }

    handleUserNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handlePwdChange(event) {
        this.setState({pwd: event.target.value});
    }

    async handleLoginClick() {
        if (this.state.userName === '' || this.state.pwd === '') return;
        try {
            let response = await fetch(`${AppConst.API_URL}/login?userName=${this.state.userName}&password=${this.state.pwd}&rd=${Math.random()}`);
            let result = await response.json();
            if (result.code === 200) {
                localStorage.setItem('token', result.data);
                hashHistory.push('admin');
            } else {
                alert(result.error);
            }
        } catch (err) {
            console.log(err);
        }
        /*
         fetch(`http://localhost:3838/api/login?userName=${this.state.userName}&password=${this.state.pwd}&rd=${Math.random()}`)
         .then(response => response.json()).then(function (result) {
         if (result.code === 200) {
         localStorage.setItem('token', result.data);
         hashHistory.push('admin');
         }
         });
         */
    }

    render() {
        return (
            <div className="AdminLogin">
                <div className="row">
                    <label className="lbl col col20">用户名</label>
                    <div className="col col80">
                        <input className="ipt" type="text" value={this.state.userName} onChange={(event) => {
                            this.handleUserNameChange(event)
                        }}/>
                    </div>
                </div>
                <div className="row">
                    <label className="lbl col col20">密码</label>
                    <div className="col col80">
                        <input className="ipt" type="password" value={this.state.pwd} onChange={(event) => {
                            this.handlePwdChange(event)
                        }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input className="btn btn-main pull-right" type="button" value="登入"
                               onClick={() => {
                                   this.handleLoginClick.bind(this)();
                               }}/>
                    </div>
                </div>
            </div>
        );
    }
}