import { createSlice } from '@reduxjs/toolkit';
import { deleteAppointment,createNewAppointment, updateAppointment, userAppointmentDetails, updateRemark } from './AppointmentAction';

const initialState = {
    loading : false,
    appointment : null,
    error : null,
    success : false
}

export const appointment = createSlice({
    name: 'appointment',
    initialState,
    reducers: {
        clearAppError: (state) => {
            state.error = null;
        },
    },
    extraReducers:{
        [deleteAppointment.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [deleteAppointment.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.success = true
        },
        [deleteAppointment.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [createNewAppointment.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [createNewAppointment.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointment = payload.appointment
            state.success = true
        },
        [createNewAppointment.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [updateAppointment.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [updateAppointment.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.success = true
        },
        [updateAppointment.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [updateRemark.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [updateRemark.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.success = true
        },
        [updateRemark.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [userAppointmentDetails.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [userAppointmentDetails.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointment = payload
            state.success = true
        },
        [userAppointmentDetails.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
    },
  });
  export const { clearAppError } = appointment.actions;
  export default appointment.reducer