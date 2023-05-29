import React, { Component } from 'react'
import AddPost from './AddPost';
import DailogComponent from './DailogComponent';
import SinglePost from './SinglePost'

export default class Classwithstate extends Component {

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

    addPostData = (data)=>{
        data['active'] = true;
        const posts = [...this.state.posts,data];
        console.log(posts);
        this.setState({
            posts:posts
        })
    }

  render() {
    return (
      <div>
        <AddPost addPostData={this.addPostData}/>
        { this.state.posts.map((post,index)=>{
             return (<div key={index}> 
                {post.active ? <SinglePost keys={index} post={post}/>: null}
             </div>)
          })
        }
        <div>
            <p>Using composition model resue code between component using "props.children"</p>
        <DailogComponent>
             <div>Showing the dailog data</div>
        </DailogComponent>
        </div>
      </div>
    )
  }
}
