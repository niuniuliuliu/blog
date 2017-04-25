/**
 * Created by ck on 08/04/2017.
 */
import React from 'react';
import BlogHeader from './BlogHeader'
import BlogContent from './BlogContent';
import BlogFooter from './BlogFooter';
import {AppConst} from '../../lib/AppConst';

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blog: null};
    }
    componentDidMount(){
        let blogId = this.props.params.id;
        this.getBlog(blogId);
    }
    async getBlog(blogId) {
        try {
            let response = await fetch(`${AppConst.API_URL}/blogs/${blogId}?rd=${Math.random()}`);
            let result = await response.json();
            if (result.code === 200) {
                this.setState({blog: result.data});
            }
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        if (this.state.blog)
            return (
                <div>
                    <BlogHeader blogId={this.state.blog._id} category={this.state.blog.category}
                                creationDate={this.state.blog.creationDate} title={this.state.blog.title}></BlogHeader>
                    <BlogContent content={this.state.blog.content}></BlogContent>
                    <BlogFooter />
                </div>
            );
        else
            return null;
    }
}