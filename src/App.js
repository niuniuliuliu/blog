/**
 * Created by ck on 08/04/2017.
 */

import React from 'react';
import Menu from './components/share/Menu';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu/>
                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        );
    }
}