/**
 * Created by ck on 30/03/2017.
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
export default class BlogSimpleContent extends React.Component {

    render() {
        return (
            <div className="BlogContent">
                <ReactMarkdown source={this.props.content}/>
            </div>
        );
    }
}