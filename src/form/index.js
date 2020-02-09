import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            <div className="form__wrapper">
                <form>
                    <fieldset className="todoList">
                        <legend className="todoList__title">TodoList</legend>
                        <label>
                            <input type="checkbox"/>
                            <i className="checkIcon"/>
                            <span>Make awesome CSS animation</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <i className="checkIcon"/>
                            <span>Watch awesome bangumi</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <i className="checkIcon"/>
                            <span>Encounter awesome people</span>
                        </label>
                        <label>
                            <input type="checkbox"/>
                            <i className="checkIcon"/>
                            <span>Be an awesome man</span>
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Form;