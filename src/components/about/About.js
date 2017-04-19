/**
 * Created by ck on 11/04/2017.
 */
import React from 'react';
import BlogContent from '../blog/BlogContent';
import '../../css/About.css';
export default class About extends React.Component {
    render() {
        let content = `
# 基本信息
niuniuliuliu xxxxxx xxxxx xxxxxxx  
xxxxxx       
# 联系方式
### [github](https://github.com/niuniuliuliu)
        `;
        return (
            <div className="About">
                <BlogContent content={content}></BlogContent>
            </div>
        );
    }
}