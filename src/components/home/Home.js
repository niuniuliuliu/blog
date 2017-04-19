/**
 * Created by ck on 10/04/2017.
 */
import React from 'react';
import BlogSimple from '../blog/BlogSimple'
import LoadMore from '../share/LoadMore';

export default class Home extends React.Component {
    getBlogs() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(<BlogSimple key={i}/>);
        }
        return arr;
    }

    render() {
        let blogs = this.getBlogs();
        return (
            <div>
                {blogs}
                <LoadMore></LoadMore>
            </div>
        );
    }
}