import React from 'react'
import {useSelector} from 'react-redux';

 function ReduxSinglePost({id}) {
    
    const postsList = useSelector((state)=>{
         const single = state.postState.posts.filter((res)=> res.id === id);
         console.log('single',single[0]);
        return state.postState.posts.filter((res)=> res.id === id)[0]
    });
  return (
    <div>
      <h5>Single Post</h5>
      <p>{postsList.id}</p>
      <p>{postsList.title}</p>
      <p>{postsList.body}</p>
    </div>
  )
}

export default React.memo(ReduxSinglePost);