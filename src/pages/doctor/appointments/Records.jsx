import { VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doctorCompletedAppointments } from '../../../store/Appointment/AppointmentsAction';
import AppointmentCard from './AppointmentCard';
import Loader from '../../../components/Loader/Loader';

const Records = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(doctorCompletedAppointments());
    }, [dispatch]);
    const {appointments} = useSelector((state) => state.appointments);
  return (
    !appointments?<Loader/>:
    <VStack spacing={5}>
        {appointments.map((app)=>{
            return <AppointmentCard appointment={app}/>
        })}
    </VStack>
  )
}

export default Records