/**
 * Created by ck on 11/04/2017.
 */

import React from 'react';
import '../../css/Archive.css';
import MileStone from '../category/MileStone'
import LoadMore from '../share/LoadMore';

export default class Archive extends React.Component {
    render() {
        return (
            <div className="Archive">
                <MileStone />
                <LoadMore></LoadMore>
            </div>
        );
    }
}