/**
 * Created by ck on 11/04/2017.
 */

import React from 'react';
import '../../css/Archive.css';
import MileStone from '../category/MileStone'
import LoadMore from '../share/LoadMore';
import {AppConst} from '../../lib/AppConst';
import fecha from 'fecha';

export default class Archive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blogs: [], pageIndex: 1, pageSize: 1, loadStatus: 0};
    }

    componentDidMount() {
        this.getBlogs();
    }

    async getBlogs() {
        try {
            this.setState({loadStatus: 1});
            let response = await fetch(`${AppConst.API_URL}/blogs?pageIndex=${this.state.pageIndex}&pageSize=${this.state.pageSize}&rd=${Math.random()}`);
            let result = await response.json();
            if (result.code === 200) {
                let loadStatus = result.data.length === 0 ? 2 : 0;
                this.setState({
                    blogs: this.state.blogs.concat(result.data),
                    pageIndex: this.state.pageIndex + 1,
                    loadStatus: loadStatus
                });
            }
        } catch (err) {
            console.log(err);
            this.setState({loadStatus: 0});
        }
    }

    render() {
        let list = [];
        let yearObj = {};
        this.state.blogs.forEach((x) => {
            let year = fecha.format(new Date(x.creationDate), 'YYYY');
            if (!yearObj[year]) {
                list.push({type: 'title', data: year});
                yearObj[year] = year;
            }
            list.push({type: 'article', data: x});
        });
        return (
            <div className="Archive">
                <MileStone list={list}/>
                <LoadMore load={() => {
                    this.getBlogs();
                }} status={this.state.loadStatus}></LoadMore>
            </div>
        );
    }
}