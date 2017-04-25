/**
 * Created by ck on 30/03/2017.
 */
import React from 'react';
import '../../css/Blog.css';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import BlogSimpleFooter from './BlogSimpleFooter';


export default class BlogSimple extends React.Component {
    render() {
        let blog = this.props.blog;
        return (
            <div className="BlogSimple">
                <BlogHeader blogId={blog._id} category={blog.category}
                            creationDate={blog.creationDate} title={blog.title}></BlogHeader>
                <BlogContent content={blog.abstract}></BlogContent>
                <BlogSimpleFooter blogId={blog._id}/>
            </div>
        );
    }
}