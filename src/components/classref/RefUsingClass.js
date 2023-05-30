import React, { Component } from 'react'
import RefChildClass from './RefChildClass';
import RefParentCallback from './RefParentCallback';

export default class RefUsingClass extends Component {

    constructor(){
        super();
        this.inputRef = React.createRef();
        this.componentRef = React.createRef();
    }

    focuse(){
        console.log('inputRef',this.inputRef);
        this.inputRef.current.focus();
    }

    componentDidMount(){
        console.log('this.componentRef',this.componentRef.current.focuse());
    }

  render() {
    return (
      <div>
         <p>using refs we can accessing dom elements. created in "render" method. and we can 
            accessing child instance (methods).
         </p>
         <div>
            <p>
            <label htmlFor='name'>name</label>
            <input type={'text'} id={'name'} ref={this.inputRef}/>
            </p>
            <button onClick={this.focuse.bind(this)}>focuse input</button>
         </div>
         <div>
            <RefChildClass ref={this.componentRef}/>
         </div>
         <div>
            <RefParentCallback />
         </div>
      </div>
    )
  }
}
