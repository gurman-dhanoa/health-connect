import { createSlice } from '@reduxjs/toolkit';
import { analyserLogin, analyserLogout, analyserRegister, checkAnalyser, getanalyser } from './AnalyserAction';

const initialState = {
    loading : false,
    isAuthenticatedAnalyser : false,
    analyser : null,
    error : null,
    success : false
}

export const analyser = createSlice({
    name: 'analyser',
    initialState,
    reducers: {
        clearAnalyserError: (state) => {
            state.error = null;
        },
    },
    extraReducers:{
        [analyserLogin.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [analyserLogin.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.analyser = payload.analyser
            state.isAuthenticatedAnalyser = true
        },
        [analyserLogin.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [analyserLogout.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [analyserLogout.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.analyser = null
            state.isAuthenticatedAnalyser = false
        },
        [analyserLogout.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [getanalyser.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [getanalyser.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.analyser = payload.analyser
            state.isAuthenticatedAnalyser = true
        },
        [getanalyser.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [checkAnalyser.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [checkAnalyser.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.analyser = payload.analyser
            state.isAuthenticatedAnalyser = true
        },
        [checkAnalyser.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = null
        },
        [analyserRegister.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [analyserRegister.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.analyser = payload.analyser
            state.isAuthenticatedAnalyser = true
        },
        [analyserRegister.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
    },
  });
  export const { clearAnalyserError } = analyser.actions;
  export default analyser.reducer