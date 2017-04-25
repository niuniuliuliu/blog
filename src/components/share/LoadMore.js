/**
 * Created by ck on 10/04/2017.
 */
import React from 'react';
class LoadMore extends React.Component {
    load() {
        if (this.props.status === 1 || this.props.status === 2)
            return;
        if (this.props.load)
            this.props.load();
    }

    render() {
        let text = this.props.status === 0 ? '加载更多' : this.props.status === 1 ? '加载中...' : '没有更多数据了';
        let appendClass = this.props.status === 0 ? '' : this.props.status === 1 ? ' loading' : ' disable';
        return (
            <div className={'load-more' + appendClass}>
                <a onClick={(event) => this.load()}>{text}</a>
            </div>
        );
    }
}
export default LoadMore;