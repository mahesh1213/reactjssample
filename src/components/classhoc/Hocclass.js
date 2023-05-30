import React, { Component } from 'react'
import { WithHoc } from './WithHoc';

class Hocclass extends Component {
  render() {
    return (
      <div>
         <p>hoc are purly functions that takes component and return a new component. 
            to enhance data or state in component</p>
        <p>component as input and return new component</p>
        <p>where we can use </p>
        <div>
            data from hoc - {this.props.name}
        </div>
      </div>
    )
  }
}

export default WithHoc(Hocclass);
