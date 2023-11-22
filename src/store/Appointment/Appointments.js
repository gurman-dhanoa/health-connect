import { createSlice } from '@reduxjs/toolkit';
import { userUpcomingAppointments,doctorUpcomingAppointments, doctorCompletedAppointments, userPrivateAppointments, userClosedAppointments, analyserAppointments } from './AppointmentsAction';

const initialState = {
    loading : false,
    appointments : null,
    error : null,
    success : false
}

export const appointments = createSlice({
    name: 'appointments',
    initialState,
    reducers: {},
    extraReducers:{
        [userUpcomingAppointments.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [userUpcomingAppointments.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointments = payload.appointments
            state.success = true
        },
        [userUpcomingAppointments.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [userClosedAppointments.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [userClosedAppointments.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointments = payload.appointments
            state.success = true
        },
        [userClosedAppointments.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [userPrivateAppointments.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [userPrivateAppointments.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointments = payload.appointments
            state.success = true
        },
        [userPrivateAppointments.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [doctorUpcomingAppointments.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [doctorUpcomingAppointments.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointments = payload.appointments
            state.success = true
        },
        [doctorUpcomingAppointments.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [doctorCompletedAppointments.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [doctorCompletedAppointments.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointments = payload.appointments
            state.success = true
        },
        [doctorCompletedAppointments.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
        [analyserAppointments.pending]:(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        },
        [analyserAppointments.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.appointments = payload.appointments
            state.success = true
        },
        [analyserAppointments.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
            state.success = false
        },
    },
  });

  export default appointments.reducer