import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const analyserLogin = createAsyncThunk(
  'analyserLogin',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.post(
        `/api/v1/analyser/login`,
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

export const analyserLogout = createAsyncThunk(
  'analyserLogout',
  async (arg,{ rejectWithValue }) => {
    try {
      await axios.put(`/api/v1/analyser/logout`);
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

export const getanalyser = createAsyncThunk(
  'getAnalyserProfile',
  async (arg,{ rejectWithValue }) => {
    try {
      const result = await axios.get(`/api/v1/analyser/profile`);
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

export const checkAnalyser = createAsyncThunk(
  'checkAnalyser',
  async (arg,{ rejectWithValue }) => {
    try {
      const result = await axios.get(`/api/v1/analyser/profile`);
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

export const analyserRegister = createAsyncThunk(
  'analyserRegister',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const result = await axios.post(
        `/api/v1/analyser/register`,
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