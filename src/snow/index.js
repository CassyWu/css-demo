import React, { Component } from 'react';
import './index.scss';
class Snow extends Component{
    /**
     * learn from https://redstapler.co/pure-css-snow-fall-effect/
     * **/

    render(){
        return(
            <div className="snow__wrapper">
                <div className="snow layer1"></div>
                <div className="snow layer1 a"></div>
                <div className="snow layer2"></div>
                <div className="snow layer2 a"></div>
                <div className="snow layer3"></div>
                <div className="snow layer3 a"></div>
            </div>
        );
    }
}

export default Snow;