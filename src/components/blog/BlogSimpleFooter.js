/**
 * Created by ck on 07/04/2017.
 */
import React from 'react';
import {Link} from 'react-router';
export default class BlogSimpleFooter extends React.Component {

    render() {
        return (
            <div className="BlogSimpleFooter">
                <Link className="btn btn-black" to="/blogDetail/11">查看全文</Link>
            </div>
        );
    }
}