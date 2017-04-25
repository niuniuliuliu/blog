/**
 * Created by ck on 13/04/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import fecha from 'fecha';
export default class MileStone extends React.Component {
    render() {
        let titleIndex = 0;
        return (
            <div className="MileStone">
                <ul>
                    {this.props.list.map((x) => {
                        if (x.type === 'title')
                            return <li key={`title_${++titleIndex}`} className="title"><a>{x.data}</a></li>
                        else if (x.type === 'article')
                            return <li key={x.data._id} className="article">
                                <div
                                    className="MileStoneTime">{fecha.format(new Date(x.data.creationDate), 'YYYY-MM-DD')}</div>
                                <Link to={`/blogDetail/${x.data._id}`}>{x.data.title}</Link></li>
                        else
                            return null
                    })}
                </ul>
            </div>
        );
    }
}