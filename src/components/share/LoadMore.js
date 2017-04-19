/**
 * Created by ck on 10/04/2017.
 */
import React from 'react';
class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: 0}; //0 可以继续加载  1加载中 2不可加载
    }

    load() {
        if (this.state.status === 2)
            return;
        this.setState({status: 1});
        setTimeout(function () {
            if (this.props.load)
                this.props.load();
            this.setState({status: 0});
        }.bind(this), 1000);
    }

    render() {
        let text = this.state.status === 0 ? '加载更多' : this.state.status === 1 ? '加载中...' : '没有更多数据了';
        return (
            <div className="load-more">
                <a  href="javascript:void(0);" onClick={(event) => this.load()}>{text}</a>
            </div>
        );
    }
}
export default LoadMore;