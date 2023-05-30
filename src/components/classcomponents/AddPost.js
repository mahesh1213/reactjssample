import React, { Component } from 'react'

export default class AddPost extends Component {

    constructor(){
        super();
        this.state = {
             title:'',
             description:''
        }
    }
    
    updateValue(eve){
     const name = eve.target.name;
     const value = eve.target.value;
     this.setState({
        [name]:value
     })
    }

    addPost(eve){
        eve.preventDefault()
        this.props.addPostData(this.state);
    }

  render() {
    return (
      <div>
          <form onSubmit={this.addPost.bind(this)}>
             <div>
                <label htmlFor='title'>Title</label>
                 <input id={'title'} type={'text'} name='title' value={this.state.title} onChange={this.updateValue.bind(this)}/>
             </div>
             <div>
                <label htmlFor='description'>Description</label>
                 <input id={'description'} type={'text'} name='description' value={this.state.description} onChange={this.updateValue.bind(this)}/>
             </div>
             <div>
                <button type='submit'>Add Post</button>
             </div>
          </form>
      </div>
    )
  }
}
