/**
 * Created by ck on 10/04/2017.
 */
import React, {PropTypes}  from 'react';
import BlogSimple from '../blog/BlogSimple'
import LoadMore from '../share/LoadMore';

import {connect} from 'react-redux';
import {HOMELOAD_ACTION, HOMELOADSTART_ACTION} from '../../actions/BlogAction';
import {AppStore} from '../../stores/AppStore';

class Home extends React.Component {
    componentDidMount() {
        if (AppStore.getState().BlogReducer.blogs.length === 0)
            AppStore.dispatch(HOMELOAD_ACTION(1, 10));
    }

    render() {
        const {blogs, pageIndex, onLoadClick, loadStatus} = this.props;
        return (
            <div>
                { blogs.map((blog) => <BlogSimple blog={blog} key={blog._id}/>)}
                <LoadMore load={() => {
                    onLoadClick(pageIndex);
                }} status={loadStatus}></LoadMore>
            </div>
        );
    }
}

Home.propTypes = {
    onLoadClick: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
    pageIndex: PropTypes.number.isRequired,
    loadStatus: PropTypes.number.isRequired
};


function mapStateToProps(state) {
    return {
        pageIndex: state.BlogReducer.pageIndex,
        blogs: state.BlogReducer.blogs,
        loadStatus: state.BlogReducer.loadStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoadClick: (pageIndex) => {
            dispatch(HOMELOADSTART_ACTION);
            dispatch(HOMELOAD_ACTION(pageIndex, 10));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);