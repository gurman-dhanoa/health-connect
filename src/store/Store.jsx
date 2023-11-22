import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/User'
import doctorReducer from './Doctor/Doctor'
import doctorsReducer from './Doctor/Doctors'
import appointmentsReducer from './Appointment/Appointments'
import appointmentReducer from './Appointment/Appointment'
export const store = configureStore({
  reducer: {
    user:userReducer,
    doctor:doctorReducer,
    doctors:doctorsReducer,
    appointments:appointmentsReducer,
    appointment:appointmentReducer,
  },
});