import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const userLogin = createAsyncThunk(
  'userLogin',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.post(
        `/api/v1/user/login`,
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

export const userRegister = createAsyncThunk(
  'userRegister',
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const result = await axios.post(
        `/api/v1/user/new`,
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

export const userLogout = createAsyncThunk(
  'userLogout',
  async (arg,{ rejectWithValue }) => {
    try {
      await axios.put(`/api/v1/user/logout`);
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

export const getUser = createAsyncThunk(
  'getUserDetails',
  async (arg,{ rejectWithValue }) => {
    try {
      const result = await axios.put(`/api/v1/user/profile`);
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

export const checkUser = createAsyncThunk(
  'checkUser',
  async (arg,{ rejectWithValue }) => {
    try {
      const result = await axios.put(`/api/v1/user/profile`);
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

export const createReview = createAsyncThunk(
  'createReview',
  async (data,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      await axios.put(
        `/api/v1/user/review`,
        data,
        config
      )
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