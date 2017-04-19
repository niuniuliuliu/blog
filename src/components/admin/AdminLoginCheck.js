/**
 * Created by ck on 19/04/2017.
 */
import React from 'react';
import {browserHistory} from 'react-router'
export default class Admin extends React.Component {
    componentDidMount() {
        let token = sessionStorage.getItem("token");
        if (!token) {
            browserHistory.push('#/adminLogin')
        }
    }

    render() {
        return (null);
    }
}