import axios from 'axios';
import { store } from '../store';

const url = 'http://localhost:5000/posts';
export const getPosts = ()=>{
    return (dispatch) => {
        axios.get(url).then((res)=>{
            dispatch({
                type:'getposts',
                payload:res.data
            });
       }).catch((err)=>{
          console.log('error',err);
       })
    };
}


export const addPosts = (addPost,clearForm)=>{
    return (dispatch) => {
    axios.post(url,addPost).then((res)=>{
        dispatch({
            type:'addposts',
            payload:res.data
        });
        clearForm();
   }).catch((err)=>{
      console.log('error',err);
   })
 }
}

export const editPosts = (data,clearForm)=>{
    return (dispatch) => {

        axios.put(`${url}/${data.id}`,{title:data.title,body:data.body}).then((res)=>{
            const cloneState = store.getState().postState.posts;
            const index = cloneState?.findIndex((res)=>res.id === data.id);
            cloneState.splice(index,1,res.data);
            dispatch({
                type:'editposts',
                payload:cloneState
            });
            clearForm();
       }).catch((err)=>{
          console.log('error',err);
       })
 }
}

export const deletePosts = (id)=>{
    return (dispatch) => {
        axios.delete(`${url}/${id}`).then((res)=>{
            const cloneState = store.getState().postState.posts;
            const index = cloneState?.findIndex((res)=>res.id === id);
            cloneState.splice(index,1);
            dispatch({
                type:'deleteposts',
                payload:cloneState
            });
       }).catch((err)=>{
          console.log('error',err);
       })
 }
}