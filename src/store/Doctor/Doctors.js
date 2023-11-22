import { createSlice } from '@reduxjs/toolkit';
import { getAllDoctors } from './DoctorsAction';

const initialState = {
    loading : false,
    doctors : [],
    error : null,
    success : false
}

export const doctors = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        
    },
    extraReducers:{
        [getAllDoctors.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [getAllDoctors.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctors = payload.doctors
        },
        [getAllDoctors.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
    },
  });

  export default doctors.reducer