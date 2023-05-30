import React, { Component } from 'react'
import PostContext from './PostContext';
import ReactContextchild from './ReactContextchild'

export default class ReactContextApi extends Component {

    constructor(){
        super();
        this.state = {
            posts: [
                {"title": "title1","description":"post1 descrription","active":true},
                {"title": "title2","description":"post2 descrription","active":true},
                {"title": "title3","description":"post3 descrription","active":false}
            ]
        }
    }

  render() {
    return (
      <div>
         <h4>Using context api to pass data through component tree without using props data</h4>
         <p>if we have common data with all component.</p>
         <p>if we need to pass context data using created context and with this(PostContext.Provider) her 
            we need to pass value. to use we also use (PostContext.Consumer)
         </p>
         <p>it track upper components and check closest context it will show data</p>
         <p>we can create multiple contexts also</p>
        <PostContext.Provider value={this.state.posts}>
          <ReactContextchild/>
        </PostContext.Provider>
      </div>
    )
  }
}
