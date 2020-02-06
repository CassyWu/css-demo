import React, { Component } from 'react';

class Loading extends Component{
    /**
     * 1.在每个点的添加一个伪元素
     * 2.给伪元素添加动画：前半段transform: scale(2.5); 后半段opacity: 0
     * 3.每个伪元素延迟动画 animation-delay: 索引 *0.2s;
     * **/

    render(){
        return(
            <div className='loading'>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
            </div>
        );
    }
}

export default Loading;