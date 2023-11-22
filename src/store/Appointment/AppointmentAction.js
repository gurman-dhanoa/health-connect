import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createNewAppointment = createAsyncThunk(
  'createAppointment',
  async (data,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      console.log(data);
      const result = await axios.post(
        `/api/v1/user/appointment/new/${data.id}`,
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

export const deleteAppointment = createAsyncThunk(
  'deleteAppointment',
  async (id,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.delete(
        `/api/v1/user/appointment/${id}`,
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

export const updateAppointment = createAsyncThunk(
  'updateAppointment',
  async (data,{ rejectWithValue }) => {
    const newdata = {};
    newdata["date"] = (data.date)?data.date:"";
    newdata["status"] = (data.status)?data.status:"";
    newdata["disease"] = (data.disease)?data.disease:"";

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.put(
        `/api/v1/doctor/appointment/${data.id}`,
        newdata,
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

export const updateRemark = createAsyncThunk(
  'updateRemark',
  async (data,{ rejectWithValue }) => {
    const newdata = {};
    newdata["private"] = (data.private)?data.private:"";
    newdata["remark"] = (data.remark)?data.remark:"";
    newdata["status"] = (data.status)?data.status:"";

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        `/api/v1/user/appointment/${data.id}`,
        newdata,
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

export const userAppointmentDetails = createAsyncThunk(
  'userAppointmentDetails',
  async (id,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/user/appointment/${id}`,
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

