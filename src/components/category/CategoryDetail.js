/**
 * Created by ck on 13/04/2017.
 */
import React from 'react';
import MileStone from './MileStone';
import LoadMore from '../share/LoadMore';

export default class CategoryDetail extends React.Component {
    componentDidMount() {
        let id = this.props.params.id;
    }

    render() {
        return (
            <div className="CategoryDetail">
                <MileStone />
                <LoadMore></LoadMore>
            </div>
        );
    }
}