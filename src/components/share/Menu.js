/**
 * Created by ck on 30/03/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import '../../css/Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div id="Menu">
                <a id="MenuButton">
                    <i className=" fa fa-bars" aria-hidden="true"></i>
                </a>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/category">分类</Link></li>
                    <li><Link to="/archive">归档</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
            </div>
        );
    }
}
export default Menu;