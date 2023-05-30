import React, { Component } from 'react'
import PostContext from './PostContext'

export default class ReactContextchild extends Component {

    static contextType = PostContext;
   
  render() {
    console.log(this.context);
    return (
      <div>
        {
            this.context?.map((res,index)=>{
                return (
                     <p key={index}>
                       {res.title}
                     </p>
                )
            })
        }
      </div>
    )
  }
}
