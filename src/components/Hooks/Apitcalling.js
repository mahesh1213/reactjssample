import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Singlepost from './Singlepost';

export default function Apitcalling() {

    const [posts,setPosts] = useState([]);
    const [addPost,setAddPost] = useState({'title':'','body':''});
    const [singlePostId,setSinglePostId] = useState(null);

    useEffect(()=>{
       axios.get('http://localhost:5000/posts').then((res)=>{
        setPosts(res?.data || []);
       }).catch((err)=>{
        setPosts([]);
       })
    },[]);

   const addPostData = (eve)=>{
        eve.preventDefault()
        axios.post('http://localhost:5000/posts',addPost).then((res)=>{
            console.log('200',res);
        }).catch((err)=>{
           console.log('err',err);
        })
    }

    const addpostData = (e)=>{
     const name = e.target.name;
     const value = e.target.value;
     setAddPost((prev)=>{
        return {...prev,[name]:value}
    })
    }

    const getSinglePost = (id)=>{
            setSinglePostId(id || null);
    }

  return (
    <div>
        <div>
            <h4>Add Post</h4>
            <div>
                <form onSubmit={addPostData}>
                    <p>
                       <label htmlFor='title'>Title:</label>
                        <input type={'text'} name="title" id="title" onChange={addpostData}/> 
                    </p>
                    <p>
                       <label htmlFor='body'>Body:</label>
                        <input type={'text'} name="body" id="body" onChange={addpostData}/> 
                    </p>
                    <p>
                        <button type='submit'>Add Post</button>
                    </p>
                </form>
            </div>
        </div>
     <div>
     { posts.length > 0 ?
      <ul>
       {
        posts.map((res)=> <li className='hover' onClick={()=>getSinglePost(res.id)} key={res.id}>{res.title}</li>)
       }
      </ul> :
      <h4>Posts are empty!. please create posts</h4>
     }
     <div>
        <Singlepost id={singlePostId}/>
     </div>
     </div>
    </div>
  )
}
