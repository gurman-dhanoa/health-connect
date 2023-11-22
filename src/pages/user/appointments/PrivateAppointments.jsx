import { Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userPrivateAppointments } from '../../../store/Appointment/AppointmentsAction';
import AppointmentCard from './AppointmentCard';
import Loader from '../../../components/Loader/Loader';

const PrivateAppointments = () => {
    const dispatch = useDispatch();
    const {appointments} = useSelector((state) => state.appointments);
    useEffect(() => {
        dispatch(userPrivateAppointments());
    }, [dispatch]);
  return (
      !appointments?<Loader/>:
      <VStack spacing={5}>
        <Text>Private Records</Text>
        {appointments.map((app)=>{
            return <AppointmentCard appointment={app}/>
        })}
    </VStack>
  )
}

export default PrivateAppointments