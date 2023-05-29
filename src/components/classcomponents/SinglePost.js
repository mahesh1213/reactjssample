import React, { Component } from 'react'

export default class SinglePost extends Component {
  render() {
    return (
      <div key={this.props.keys}>
         <dl>
            <dt>{this.props.post.title}</dt>
            <dd>{this.props.post.description}</dd>
         </dl>
      </div>
    )
  }
}
