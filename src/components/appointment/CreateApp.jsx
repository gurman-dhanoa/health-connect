import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import Button from "../elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createNewAppointment } from "../../store/Appointment/AppointmentAction";
import { clearAppError } from "../../store/Appointment/Appointment";

const CreateAppointment = ({ id }) => {
  const { error, success } = useSelector((state) => state.appointment);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const createAppointment = (data) => {
    data["id"] = id;
    dispatch(createNewAppointment(data));
    onClose();
    if (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      dispatch(clearAppError());
    }
    if (success) {
      toast({
        title: "Success",
        description: "Appointment booked successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>

      <Button onClick={onOpen} h={"30px"} fontSize={"sm"}>
        Book an Appointment
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(createAppointment)}>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input type="datetime-local" {...register("date")} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Comment</FormLabel>
                <Textarea type="text" {...register("comment")} />
              </FormControl>
              <Button type="submit" mt={3}>
                Book Now
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateAppointment;
