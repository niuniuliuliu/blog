/**
 * Created by ck on 30/03/2017.
 */
import React from 'react';
import {Link} from 'react-router';
export default class BlogHeader extends React.Component {

    render() {
        return (
            <div className="BlogHeader">
                <h1 className="BlogTitle">
                    <Link to="/blogDetail/11">{this.props.title}</Link>
                </h1>
                <span>发表于 2017年3月30日</span>
                <span className="divider">|</span>
                <span>分类 未知</span>
                <span className="divider">|</span>
                <span>阅读次数 1</span>
            </div>
        );
    }
}