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
        let content = '如果你得罪了老板，失去的只是一份工作；如果你得罪了客户，失去的不过是一份订单；是的，世上只有一个人可以得罪：你给她脸色看，你冲她发牢骚，你大声顶撞她，甚至当 着她的面摔碗，她都不会记恨你，原因很简单，因为她是你的母亲。';
        return (
            <div className="BlogSimple">
                <BlogHeader title={'第一篇博客'}></BlogHeader>
                <BlogContent content={content}></BlogContent>
                <BlogSimpleFooter />
            </div>
        );
    }
}