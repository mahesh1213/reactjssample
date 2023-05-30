import React, { Component } from 'react'

export function WithHoc(WrappedComponent) {
  return class extends Component{
    constructor(){
        super();
        this.state = {
            name:'Hello Hoc'
        }
    }
    render(){
        return (
            <div>
                <div style={{'color':"red"}}>Example Title here hoc</div>
                <WrappedComponent {...this.props} {...this.state}/>
            </div>
        )
    }
  }
}
