import { Button, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userUpcomingAppointments } from '../../../store/Appointment/AppointmentsAction';
import AppointmentCard from './AppointmentCard';
import Loader from '../../../components/Loader/Loader';

const UserAppointments = () => {
    const dispatch = useDispatch();
    const {appointments} = useSelector((state) => state.appointments);
    useEffect(() => {
        dispatch(userUpcomingAppointments());
    }, [dispatch]);
  return (
    !appointments?<Loader/>:
    <VStack spacing={5}>
        {appointments.map((app)=>{
            return <AppointmentCard appointment={app}/>
        })}
    </VStack>
  )
}

export default UserAppointments