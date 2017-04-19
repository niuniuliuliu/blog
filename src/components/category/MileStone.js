/**
 * Created by ck on 13/04/2017.
 */
import React from 'react';
import {Link} from 'react-router';
export default class MileStone extends React.Component {
    render() {
        return (
            <div className="MileStone">
                <ul>
                    <li className="title"><a>node</a></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客博客</Link></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客博客</Link></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客第一篇博客博客</Link></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇博客</Link></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇博客</Link></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇博客</Link></li>
                    <li className="article"><div className="MileStoneTime">2017-01-01</div><Link to="/blogDetail/11">第一篇博客</Link></li>
                </ul>
            </div>
        );
    }
}