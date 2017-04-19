import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './css/normalize.css';
import './css/font-awesome.min.css';
import './css/main.css';

import App from './App';
import Header from './components/share/Header';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Footer from "./components/share/Footer";
import BackToTop from "./components/share/BackToTop";
import About from "./components/about/About";
import Archive from "./components/archive/Archive";
import Category from "./components/category/Category";
import CategoryDetail from "./components/category/CategoryDetail";
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/admin/AdminLogin";

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {INCREASE_ACTION} from './actions/CountAction';
import {AppStore} from './stores/AppStore';

// React component
class Counter extends React.Component {
    render() {
        const {value, onIncreaseClick} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}


Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.CounterReducer.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(INCREASE_ACTION)
    }
}
const AppCount = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

ReactDOM.render(
    <Provider store={AppStore}>
        <div>
            <section id="topSection">
                < Header />
                <AppCount/>
            </section>
            <section id="middleSection">
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="category" component={Category}/>
                        <Route path="archive" component={Archive}/>
                        <Route path="about" component={About}/>
                        <Route path="blogDetail/:id" component={Blog}/>
                        <Route path="categoryDetail/:id" component={CategoryDetail}/>
                        <Route path="admin" component={Admin}/>
                        <Route path="adminLogin" component={AdminLogin}/>
                    </Route>
                </Router>
            </section>
            <section id="bottomSection">
                <Footer/>
                <BackToTop/>
            </section>
        </div>
    </Provider>,
    document.getElementById('root')
);