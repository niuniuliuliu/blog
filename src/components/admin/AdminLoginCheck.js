/**
 * Created by ck on 19/04/2017.
 */
import React from 'react';
import {hashHistory} from 'react-router';
export default class Admin extends React.Component {
    componentDidMount() {
        let token = localStorage.getItem("token");
        if (!token) {
            hashHistory.push('adminLogin');
        }
    }

    render() {
        return (null);
    }
}