import { createSlice } from '@reduxjs/toolkit';
import { userRecordForDoc } from './AppointmentsAction';

const initialState = {
    loading : false,
    records : null,
    error : null,
    success : false
}

export const records = createSlice({
    name: 'records',
    initialState,
    reducers: {},
    extraReducers:{
        [userRecordForDoc.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [userRecordForDoc.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.records = payload.appointments
            state.success = true
        },
        [userRecordForDoc.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
    },
  });

  export default records.reducer