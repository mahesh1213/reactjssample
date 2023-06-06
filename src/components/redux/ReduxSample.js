import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from '../../store/actions/counterAction';
import { addPosts, editPosts, getPosts,deletePosts } from '../../store/actions/postsAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ReduxSinglePost from './ReduxSinglePost';

export default function ReduxSample() {

    const dispatch = useDispatch();

    const count = useSelector((state)=>{
        return state.countState.count
    });

    const postsList = useSelector((state)=>{
        return state.postState.posts
    });

    const [posts,setPosts] = useState([]);
    const [addpost,setAddPost] = useState({'title':'','body':''});
    const [editMode,setEditMode] = useState({status:false,id:null});
    const [singlePosts,setSinglePosts] = useState(null);

    useEffect(()=>{
       dispatch(getPosts());
    },[dispatch]);

    useEffect(()=>{
        console.log('postsList',postsList);
        setPosts(postsList);
     },[postsList])

    const counterUpdate = (type)=>{
       if(type === 'increment'){
           dispatch(increment());
       }else{
           dispatch(decrement());
       }
    }

    const addPostData = (eve)=>{
        eve.preventDefault()
        if(!editMode.status){
          dispatch(addPosts(addpost,clearForm));
        }else{
            const addpostNew = {...addpost,id:editMode.id}
            dispatch(editPosts(addpostNew,clearForm));
        }
    }

    const clearForm = ()=>{
        setAddPost((prev)=>{
         return {...prev,'title':'','body':''}
        });
        setEditMode({status:false,id:null});
    }

    const addpostData = (e)=>{
     const name = e.target.name;
     const value = e.target.value;
     setAddPost((prev)=>{
        return {...prev,[name]:value}
    })
    }

    const edit_delete = (id,type)=>{
       if(type === 'edit'){
          setEditMode({status:true,id:id});
          const [first] = posts.filter((res)=> res.id === id);
          setAddPost((prev)=>{
            return {...prev,'title':first.title,'body':first.body}
           })
       }else{
        dispatch(deletePosts(id));
       }
    }

    const singlePost = (id)=>{
        setSinglePosts(id);
    }

  return (
    <div>
      <p>count {count}</p>
      <div>
        <button onClick={()=>counterUpdate('increment')}>increment</button>
        <button onClick={()=>counterUpdate('decrement')}>decrement</button>
      </div>
      <>
      <div>
            <h4>Add Post</h4>
            <div>
                <form onSubmit={addPostData}>
                    <p>
                       <label htmlFor='title'>Title:</label>
                        <input type={'text'} name="title" id="title" value={addpost.title} onChange={addpostData}/> 
                    </p>
                    <p>
                       <label htmlFor='body'>Body:</label>
                        <input type={'text'} name="body" id="body" value={addpost.body} onChange={addpostData}/> 
                    </p>
                    <p>
                        <button type='submit'>{editMode.status ? 'Edit Post' :'Add Post'}</button>
                    </p>
                </form>
            </div>
        </div>
      <div>
      { posts.length > 0 ?
      <ul>
       {
        posts.map((res)=> { 
        return <React.Fragment key={res.id}>
        <li className='hover' onClick={()=> singlePost(res.id)}>{res.id} {res.title} 
        <Tooltip title="Update">
            <IconButton className='edit_delete' onClick={()=>edit_delete(res.id,'edit')}>
                <EditIcon />
            </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
            <IconButton className='edit_delete' onClick={()=>edit_delete(res.id,'delete')}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
        </li>
        </React.Fragment>})
       }
      </ul> :
      <h4>Posts are empty!. please create posts</h4>
     }
     </div>
     <div>
      {singlePosts &&<>
         <ReduxSinglePost id={singlePosts}/>
      </>
      }
      </div>
     </>
    </div>
  )
}
