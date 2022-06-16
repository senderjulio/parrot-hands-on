import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../@types';

interface initialState{
    users: User;
    isloged: boolean;
}

const initialState: initialState = {
    users: {} as User,
    isloged: false
}

const usersSlice = createSlice({
    name: '@users',
    initialState,
    reducers: {
        setUsersEdit: (state, action) => {
            state.users = action.payload.users;
            
        },
        setLogin: (state, action) => {
            state.isloged = action.payload.isloged;
        }
    }
})


export const { setUsersEdit, setLogin } = usersSlice.actions;

export default usersSlice.reducer;

