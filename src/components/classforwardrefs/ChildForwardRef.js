import React, { Component } from 'react'

export default class ChildForwardRef extends Component {
    render() {
        // Access the forwarded ref using `this.props`
        const { forwardedRef, ...rest } = this.props;
    
        return <input ref={forwardedRef} {...rest} />;
      }
}
