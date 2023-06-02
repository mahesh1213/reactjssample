import React, { Component } from 'react'
import ChildForwardRef from './ChildForwardRef'

export default class PassingFarwordRefClass extends Component {
    constructor(props) {
        super(props);
    
        // Create a ref to be forwarded
        this.inputRef = React.createRef();
      }
    
      componentDidMount() {
        // Access and manipulate the input element using the forwarded ref
        this.inputRef.current.focus();
      }
    
      render() {
        // Forward the ref to the child component using `React.forwardRef`
        const ForwardedInput = React.forwardRef((props, ref) => (
          <ChildForwardRef {...props} forwardedRef={ref} />
        ));
    
        return (
          <div>
            <h1>Forward Ref Example</h1>
            <p>what ever we created 'ref' in parent we forwarding to child component</p>
            <ForwardedInput ref={this.inputRef} />
          </div>
        );
      }
}
