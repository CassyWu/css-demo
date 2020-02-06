import React, { Component } from 'react';
import 'index.scss'

class SplitText extends Component{
    constructor(){
        super();
        const text = 'Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.';
        this.state = {
            textArr: text.split('')
        }
    }

    /**
     * 1. 把需要显示的文字做成数组，分成多个span渲染
     * 2. span添加动画，opacity从0到1. transformY从-20%到0
     * 3. 每个span的延迟时间0.05乘以本身的索引
     * **/
    render(){
        return(
            <div className="splitText__wrapper">
                <p className="landIn">
                    {
                        this.state.textArr.map((item, index) => {
                            const delay = index * 0.05;
                            return <span key={index} style={{"animationDelay": delay+'s'}}>{item}</span>
                        })
                    }
                </p>
            </div>
        );
    }
}

export default SplitText;