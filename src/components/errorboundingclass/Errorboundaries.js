import React, { Component } from 'react'
import ChildErrorboundaries from './ChildErrorboundaries'
import Messages from './Messages'

export default class Errorboundaries extends Component {
    
  render() {
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    return (
      <div>        
         <h4>Error boundaries</h4>
         <p>it provided log any error occur's in component and dispaly fallback ui.</p>
         <p>if component will become errorboundaries it has two methods (getDerivedStateFromError, componentDidCatch)</p>
         <p>getDerivedStateFromError - it executes just before "render" method.</p>
         <p>componentDidCatch - after component completed rendering.to log an error.</p>
         <div>
      <h1>Chat Application</h1>
      <ChildErrorboundaries>
        <Messages text="Hello, how are you?" />
      </ChildErrorboundaries>
      <ChildErrorboundaries>
        <Messages text="I'm doing great!" />
      </ChildErrorboundaries>
      <ChildErrorboundaries>
        <Messages text="error" />
      </ChildErrorboundaries>
      <ChildErrorboundaries>
        <Messages text="This message will be rendered." />
      </ChildErrorboundaries>
     </div>
      <div>
        <h4>User Profile</h4>
      <ChildErrorboundaries>
          <UserProfile user={user} />
      </ChildErrorboundaries>
      </div>
      </div>
    )
  }
}

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Simulating an error by accessing a property that doesn't exist */}
        <p>Location: {user.location.city}</p>
      </div>
    );
  }
}