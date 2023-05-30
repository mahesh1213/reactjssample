import React, { Component } from 'react'

export default class RefChildClass extends Component {

    focuse(){
        console.log('child method is calling');
        return "called"
    }

  render() {
    return (
      <div>
         <p>Ref child component.</p>
      </div>
    )
  }
}
