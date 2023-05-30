import React, { Component } from 'react'

export default class ChildErrorboundaries extends Component {

    constructor(){
        super();
        this.state = {
            hasError:false
        }
    }

   static getDerivedStateFromError(){
       return { hasError: true };
    }

    componentDidCatch(error,info){
        console.log('componentDidCatch',error,info);
    }

    render() {
    // eslint-disable-next-line no-lone-blocks
    { 
     if(this.state.hasError){
      return(<div>
              <p>An error occur.</p>
             </div>)
         }
    }
    return this.props.children
  }
    }
