import React, { Component } from 'react';
import { 
    Element, 
    Events, 
    animateScroll as scroll, 
    scrollSpy, 
    scroller 
} from 'react-scroll';

class Scroll extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });
        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div></div>

        );
    }
}

export default Scroll;
