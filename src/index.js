import React from 'react';
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

import {Provider} from 'react-redux';
import {AppStore} from './stores/AppStore';


ReactDOM.render(
    <Provider store={AppStore}>
        <div>
            <section id="topSection">
                < Header />
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