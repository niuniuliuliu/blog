/**
 * Created by ck on 30/03/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import fecha from 'fecha';

export default class BlogHeader extends React.Component {

    render() {
        let date = new Date(this.props.creationDate);
        let blogId = this.props.blogId;
        let category = this.props.category;
        let title = this.props.title;
        return (
            <div className="BlogHeader">
                <h1 className="BlogTitle">
                    <Link to={`/blogDetail/${blogId}`}>{title}</Link>
                </h1>
                <span>{`发表于 ${fecha.format(date, 'YYYY年MM月DD日')}`}</span>
                <span className="divider">|</span>
                <span>{`分类 ${category}`}</span>
                <span className="divider">|</span>
                <span>阅读次数 1</span>
            </div>
        );
    }
}