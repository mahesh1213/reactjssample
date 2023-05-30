import React, { Component } from 'react'

export default class LifeCycleclass extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
       super(props);
       this.state = {
          title: "2 faces mounting, updating, unmounting"
       }
       console.log('parent constructor is call');
    }

    static getDerivedStateFromProps(props,state){
        console.log('parent getDerivedStateFromProps is call');
      return state;
    }

    componentDidMount(){
        console.log('parent componentDidMount is call');
    }

  render() {
    console.log('parent render methos is call');
    return (
      <div>
         <p>{this.state.title}</p>
         <h4>
            mounting
         </h4>
         <ul>
            <li>constructor - it not life cycle.here also we can define "State"(create). </li>
            <li>getDerivedStateFromProps (static Method (props,state)) - if you getting props.if we updating state based on props. 
                it call when component mounted and state or props update.</li>
            <li>Render - it call when component mounted and state or props update.</li>
            <li>componentDidMount - here we can call http calls,setState</li>
         </ul>
         <h4>
         updating
         </h4>
         <ul>
            <li>
                getDerivedStateFromProps (static Method (props,state)) - if you getting props.if we updating state based on props. 
                it call when component mounted and state or props update.
            </li>
            <li>
                shouldComponentUpdate (nextProps, nextState)- re-render the component it return(true,false). if it return false
                below life cycle methods will not call.
            </li>
             <li>
                Render - it call when component mounted and state or props update.
            </li>
            <li>
                getSnapshotBeforeUpdate (prevProps, prevState)- when to scroll at any postion. 
                it capture dom information.
            </li>
            <li>
                componentDidUpdate (prevProps, prevState,snapshot)- when over all component update it will call.
            </li>
         </ul>
      </div>
    )
  }
}
