import {intialState} from '../intial-state';
import { store } from '../store';

export const postsReducer = (state=intialState.posts,action)=>{
 
    switch (action.type) {
        case 'getposts':
            return {
                ...state,
                posts: action.payload
            }
        case 'addposts':
            const data = [...state.posts,action.payload]
            return {
                ...state,
                posts: data
            }
        case 'deleteposts':
            // console.log('state.posts,action.payload',state.posts,action.payload);
             const data1 = [...state.posts]
            return {
                 ...state,
                posts: data1
            }
        case 'editposts':
                // console.log('state.posts,action.payload',state.posts,action.payload);
             const data2 = [...state.posts]
                return {
                     ...state,
                    posts: data2
            }
        default:
            return state
    }
}