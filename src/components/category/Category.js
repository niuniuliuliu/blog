/**
 * Created by ck on 11/04/2017.
 */
import React, {PropTypes}   from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {CATEGORYLOAD_ACTION} from '../../actions/CategoryAction';
import {AppStore} from '../../stores/AppStore';
import '../../css/Category.css';

class Category extends React.Component {
    componentDidMount() {
        AppStore.dispatch(CATEGORYLOAD_ACTION);
    }

    render() {
        const {categorys} = this.props;
        return (
            <div className="Category">
                <ul>
                    {categorys.map((x) => {
                        return <li key={x._id}><Link to={`/categoryDetail/${x._id}`}>{`${x._id}(${x.count})`}</Link>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

Category.propTypes = {
    categorys: PropTypes.array.isRequired
};
function mapStateToProps(state) {
    return {
        categorys: state.CategoryReducer.categorys
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);