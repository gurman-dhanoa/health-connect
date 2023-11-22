import { createSlice } from '@reduxjs/toolkit';
import { checkDoctor, doctorDetails, doctorLogin, doctorLogout, doctorRegister, getdoctor } from './DoctorAction';

const initialState = {
    loading : false,
    isAuthenticatedDoctor : false,
    doctor : null,
    error : null,
    success : false
}

export const doctor = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        clearDoctorError: (state) => {
            state.error = null;
        },
    },
    extraReducers:{
        [doctorLogin.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [doctorLogin.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctor = payload.doctor
            state.isAuthenticatedDoctor = true
        },
        [doctorLogin.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [doctorLogout.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [doctorLogout.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctor = null
            state.isAuthenticatedDoctor = false
        },
        [doctorLogout.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [getdoctor.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [getdoctor.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctor = payload.doctor
            state.isAuthenticatedDoctor = true
        },
        [getdoctor.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [checkDoctor.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [checkDoctor.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctor = payload.doctor
            state.isAuthenticatedDoctor = true
        },
        [checkDoctor.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = null
        },
        [doctorRegister.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [doctorRegister.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctor = payload.doctor
            state.isAuthenticatedDoctor = true
        },
        [doctorRegister.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
        [doctorDetails.pending]:(state) => {
            state.loading = true
            state.error = null
        },
        [doctorDetails.fulfilled]:(state,{payload}) => {
            state.loading = false
            state.success = true
            state.doctor = payload.doctor
        },
        [doctorDetails.rejected]:(state,{payload}) => {
            state.loading = false
            state.error = payload
        },
    },
  });
  export const { clearDoctorError } = doctor.actions;
  export default doctor.reducer