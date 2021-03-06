/**
 * Created by ck on 13/04/2017.
 */
import React from 'react';
import MileStone from './MileStone';
import LoadMore from '../share/LoadMore';
import {AppConst} from '../../lib/AppConst';

export default class CategoryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blogs: [], pageIndex: 1, pageSize: 10, loadStatus: 0};
    }

    componentDidMount() {
        this.getBlogs();
    }

    async getBlogs() {
        try {
            this.setState({loadStatus: 1});
            let category = this.props.params.id;
            let response = await fetch(`${AppConst.API_URL}/categorys/${category}/blogs?pageIndex=${this.state.pageIndex}&pageSize=${this.state.pageSize}&rd=${Math.random()}`);
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
        let list = [{type: 'title', data: this.props.params.id}];
        list = list.concat(this.state.blogs.map((x) => {
            return {type: 'article', data: x}
        }));
        return (
            <div className="CategoryDetail">
                <MileStone list={list}/>
                <LoadMore load={() => {
                    this.getBlogs();
                }} status={this.state.loadStatus}></LoadMore>
            </div>
        );
    }
}