import React, { Component } from 'react'
import RefCallbacks from './RefCallbacks';

export default class RefParentCallback extends Component {

      constructor(){
        super();
        this.textInput = null;

      }

      componentDidMount(){
        console.log('parent call back',this.textInput);
        this.textInput.focus();
        this.textInput.value = "parent hello world";
      }

  render() {
    return (
      <div>
         <RefCallbacks inputRef={(el) => this.textInput = el}/>
      </div>
    )
  }
}
