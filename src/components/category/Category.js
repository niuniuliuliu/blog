/**
 * Created by ck on 11/04/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import '../../css/Category.css';

export default class Category extends React.Component {
    render() {
        return (
            <div className="Category">
                <ul>
                    <li><Link to="/categoryDetail/11">node(11)</Link></li>
                    <li><Link to="/categoryDetail/11">c#(11)</Link></li>
                    <li><Link to="/categoryDetail/11">js(11)</Link></li>
                    <li><Link to="/categoryDetail/11">css(11)</Link></li>
                    <li><Link to="/categoryDetail/11">c++(11)</Link></li>
                    <li><Link to="/categoryDetail/11">html(11)</Link></li>
                </ul>
            </div>
        );
    }
}