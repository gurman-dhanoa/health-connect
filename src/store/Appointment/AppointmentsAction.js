import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const userUpcomingAppointments = createAsyncThunk(
  'userUpcomingAppointments',
  async (arg,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/user/appointments`,
        config
      )
      return result.data;
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userPrivateAppointments = createAsyncThunk(
  'userPrivateAppointments',
  async (arg,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/user/privateAppointments`,
        config
      )
      return result.data;
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const userClosedAppointments = createAsyncThunk(
  'userClosedAppointments',
  async (arg,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/user/oldAppointments`,
        config
      )
      return result.data;
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const doctorUpcomingAppointments = createAsyncThunk(
  'doctorUpcomingAppointments',
  async (arg,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/doctor/appointments`,
        config
      )
      console.log(result);
      return result.data;
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const doctorCompletedAppointments = createAsyncThunk(
  'doctorCompletedAppointments',
  async (arg,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/doctor/oldAppointments`,
        config
      )
      console.log(result);
      return result.data;
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const analyserAppointments = createAsyncThunk(
  'analyserAppointments',
  async (data,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/analyser/appointments`,
        {params:data},
        config
      )
      return result.data;
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)