/**
 * Created by ck on 11/04/2017.
 */
import React from 'react';
import '../../css/BackToTop.css';

class BackToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {buttonShow: false};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll.bind(this));
    }

    scroll(event) {
        event.preventDefault();
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({buttonShow: currentScroll > 0});
    }

    toTop() {
        let smoothScroll = function () {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothScroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        }
        smoothScroll();
    }

    render() {
        if (this.state.buttonShow)
            return (
                <div id="BackToTop">
                    <i className="fa fa-arrow-circle-up" title="回到顶部" onClick={(event) => this.toTop()}></i>
                </div>
            );
        else
            return (null);
    }
}
export default BackToTop;