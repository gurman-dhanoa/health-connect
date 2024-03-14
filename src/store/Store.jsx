import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/User'
import doctorReducer from './Doctor/Doctor'
import analyserReducer from './Analyser/Analyser'
import doctorsReducer from './Doctor/Doctors'
import appointmentsReducer from './Appointment/Appointments'
import appointmentReducer from './Appointment/Appointment'
import recordsReducer from './Appointment/Records'
export const store = configureStore({
  reducer: {
    user:userReducer,
    doctor:doctorReducer,
    analyser:analyserReducer,
    doctors:doctorsReducer,
    appointments:appointmentsReducer,
    appointment:appointmentReducer,
    records:recordsReducer,
  },
});