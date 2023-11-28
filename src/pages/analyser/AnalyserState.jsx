import React, { useState } from 'react'
import AnalyserFilter from '../../components/filter/AnalyserFilter'
import { analyserCityAppointments } from '../../store/Appointment/AppointmentsAction';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import Analyser from './analyser';

const AnalyserState = () => {
    const [stateInfo, setStateInfo] = useState(null);
    const dispatch = useDispatch();
    const { loading,appointments } = useSelector((state) => state.appointments);
    const handleFilterSubmit = (filters) => {
      dispatch(analyserCityAppointments(filters));
    };
  return (
    <>
    {/* <AnalyserFilter onSubmit={handleFilterSubmit} setStateInfo={setStateInfo}/>
    {appointments && appointments.map((e)=>{return <Text>{e.city}{e.cases}</Text>})}
  {!loading && stateInfo && <Analyser zoom={8} coordinates={{lat:Number(stateInfo.latitude),lng:Number(stateInfo.longitude)}} label={appointments.length}/>} */}
          <Flex
        position='relative'
        flexDirection='column'
        alignItems='center'
        h='100vh'
        w='100vw'
        maxW={"100%"}
      >
        <Box position='absolute' left={0} top={0} h='100%' w='100%'>
          {!stateInfo && <Analyser zoom={5} coordinates={{lat:20.5937,lng:78.9629}} label={""} marker={false}/>}
          {!loading && stateInfo && <Analyser zoom={8} coordinates={{lat:Number(stateInfo.latitude),lng:Number(stateInfo.longitude)}} label={appointments.length} marker={false}/>}
        </Box>
        <Box
          p={4}
          borderRadius='lg'
          m={4}
          bgColor='white'
          shadow='base'
          minW='container.md'
          zIndex='1'
        >
          <AnalyserFilter onSubmit={handleFilterSubmit} setStateInfo={setStateInfo}/>
        </Box>
        {appointments && appointments.map((e)=>{return<HStack justify={"space-between"}
          p={3}
          borderRadius='lg'
          m={1}
          bgColor='white'
          shadow='base'
          minW='container.md'
          zIndex='1'
        >
           <Text>{e.city}</Text><Text>{e.cases}</Text>
        </HStack>})}
      </Flex>
    </>
  )
}

export default AnalyserState