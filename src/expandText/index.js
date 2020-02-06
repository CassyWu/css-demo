import React, { Component } from 'react';

class expandText extends Component {
    constructor(){
        super();
        const text = 'sword art online';
        this.state = {
            textArr: text.split('')
        }
    }

    /**
     * 1.计算出字符串除开空格以外剩余字符的中间位置
     * 2.中间元素的下标到当前元素的下标的距离与步长的乘积 delay + Math.abs(i - middle) * step
     * **/
    render(){
        const middle = this.state.textArr.filter(e => e !== " ").length / 2;
        return(
            <div className="expandText__wrapper">
                <div className="reveal">
                    {
                        this.state.textArr.map((item, index) => {
                            const delay = 0.3 + Math.abs(index - middle) * 0.1;
                            return <span key={index} style={{"animationDelay": delay+'s'}}>{item}</span>
                        })
                    }
                </div>
            </div>
        );
    }
}
export default expandText;