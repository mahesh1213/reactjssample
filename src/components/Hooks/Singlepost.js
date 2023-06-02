import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Singlepost({id}) {
    const [singlePost,setSinglePost] = useState(null);

useEffect(()=>{
    if(id){
    axios.get(`http://localhost:5000/posts/${id}`).then((res)=>{
        setSinglePost(res?.data || null);
       }).catch((err)=>{
        console.log(err)
       });
    }
},[id])

    
 
  return (
    <div>
      {
            singlePost && <>
              <p>Title :- {singlePost.title}</p>
              <p>Description :- {singlePost.body}</p>
            </>
        }
    </div>
  )
}
