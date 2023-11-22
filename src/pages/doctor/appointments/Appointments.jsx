import { Button, HStack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doctorUpcomingAppointments } from '../../../store/Appointment/AppointmentsAction';
import AppointmentCard from './AppointmentCard';
import Loader from '../../../components/Loader/Loader';

const DoctorAppointments = () => {
    const [state, setstate] = useState("NEW");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(doctorUpcomingAppointments());
    }, [dispatch]);
    const {appointments} = useSelector((state) => state.appointments);
  return (
    !appointments?<Loader/>:
    <VStack spacing={5}>
        <HStack>
            <Button onClick={()=>setstate("NEW")}>Un-Allocated Appointments</Button>
            <Button onClick={()=>setstate("ALLOTED")}>Allocated Appointments</Button>
        </HStack>
        {state === "NEW" && appointments.filter(app => app.status === "NEW").map((app)=>{
            return <AppointmentCard appointment={app}/>
        })}
        {state === "ALLOTED" && appointments.filter(app => app.status === "ALLOTED").map((app)=>{
            return <AppointmentCard appointment={app}/>
        })}
    </VStack>
  )
}

export default DoctorAppointments