import React, { Component } from 'react'

export default class RefCallbacks extends Component {
    constructor(){
        super();
        this.textInput = null;
        this.inputRef = el =>{
            this.textInput = el;
        }
    }

    componentDidMount(){
        console.log('RefCallbacks',this.textInput);
        this.textInput.focus();
        this.textInput.value = "hello world";
    }

  render() {
    return (
      <div>
         <p>callback refs - with out using React.createRef. by using this we can get child element of dom</p>
         <p>
            <label htmlFor='name'>name</label>
            <input type={'text'} id={'name'} ref={this.inputRef}/>
        </p>
        <p>
            <label htmlFor='name'>parent accessing</label>
            <input type={'text'} id={'name'} ref={this.props.inputRef}/>
            </p>
      </div>
    )
  }
}
