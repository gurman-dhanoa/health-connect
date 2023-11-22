import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const doctorLogin = createAsyncThunk(
  'doctorLogin',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.post(
        `/api/v1/doctor/login`,
        data,
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

export const doctorLogout = createAsyncThunk(
  'doctorLogout',
  async (arg,{ rejectWithValue }) => {
    try {
      await axios.put(`/api/v1/doctor/logout`);
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

export const getdoctor = createAsyncThunk(
  'getDoctorProfile',
  async (arg,{ rejectWithValue }) => {
    try {
      const result = await axios.get(`/api/v1/doctor`);
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

export const checkDoctor = createAsyncThunk(
  'checkDoctor',
  async (arg,{ rejectWithValue }) => {
    try {
      const result = await axios.get(`/api/v1/doctor`);
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

export const doctorRegister = createAsyncThunk(
  'doctorRegister',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const result = await axios.post(
        `/api/v1/doctor/new`,
        data,
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

export const doctorDetails = createAsyncThunk(
  'doctorDetails',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const result = await axios.get(
        `/api/v1/user/doctor/${id}`,
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