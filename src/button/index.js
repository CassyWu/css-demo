import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div className="btn_wrapper">
                <div className="btn-1"><span>Hover Me</span></div>
                <div className="btn-2">Hover me</div>
            </div>
        );
    }
}

export default Button;