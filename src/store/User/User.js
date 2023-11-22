import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, getUser, checkUser, userRegister } from './UserAction';

const initialState = {
    loading : false,
    isAuthenticatedUser : false,
    user : {},
    error : null,
    success : false
}

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers:{
        [userLogin.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.user = payload.user
            state.isAuthenticatedUser = true
        },
        [userLogin.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [userRegister.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [userRegister.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.user = payload.user
            state.isAuthenticatedUser = true
        },
        [userRegister.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [userLogout.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [userLogout.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.user = null
            state.isAuthenticatedUser = false
        },
        [userLogout.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [getUser.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [getUser.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.user = payload.newUser
            state.isAuthenticatedUser = true
        },
        [getUser.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [checkUser.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [checkUser.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.user = payload.newUser
            state.isAuthenticatedUser = true
        },
        [checkUser.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = null
        },
    },
  });
  export const { clearError } = user.actions;
  export default user.reducer