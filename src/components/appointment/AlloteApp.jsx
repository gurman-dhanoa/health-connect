import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import {
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react";
import React from 'react'
import { updateAppointment } from "./../../store/Appointment/AppointmentAction";
import { useDispatch } from "react-redux";
import { doctorUpcomingAppointments } from "./../../store/Appointment/AppointmentsAction";
import { useForm } from "react-hook-form";
import { MdEditCalendar } from "react-icons/md";

const AlloteAppointment = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const alloteHandler = (data)=>{
      data["id"] = props.id;
      data["status"]="ALLOTED";
      dispatch(updateAppointment(data));
      onClose();
      dispatch(doctorUpcomingAppointments());
    }
  return (
    <>
      <MdEditCalendar onClick={onOpen}/>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Allote Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(alloteHandler)}>
            <FormControl>
              <FormLabel>Date</FormLabel>
              <Input type="datetime-local" {...register("date")}/>
            </FormControl>
            <Button type="submit" mt={3}>Allote</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AlloteAppointment