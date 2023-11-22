import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getAllDoctors = createAsyncThunk(
  'getAllDoctors',
  async ( filter,{ rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const result = await axios.get(
        `/api/v1/doctors`,
        {params:filter},
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