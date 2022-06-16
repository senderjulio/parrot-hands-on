

import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../@types';

interface initialState{
    posts: Post[];

}

const initialState: initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: '@posts',
    initialState,
    reducers: {
        setPostsRedux: (state, action) => {
            state.posts = action.payload.posts;
            
        }
    }
})

export const { setPostsRedux } = postsSlice.actions;

export default postsSlice.reducer;
