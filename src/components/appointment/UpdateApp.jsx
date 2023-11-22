import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure, Button, FormControl } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointment } from "./../../store/Appointment/AppointmentAction";
import { FiEdit } from "react-icons/fi";
import { doctorUpcomingAppointments } from "../../store/Appointment/AppointmentsAction";
import { clearAppError } from "../../store/Appointment/Appointment";

const UpdateAppointment = (props) => {

  const toast = useToast();
  const [inputFields, setInputFields] = useState([{}]);

  const handleAddField = () => {
    setInputFields([...inputFields, {}]);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index] = event.target.value;
    setInputFields(values);
  };

  const handleRemoveField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit } = useForm();
  const { error, success } = useSelector((state) => state.appointment);

  const dispatch = useDispatch();
  const updateAppHandle = (data) => {
    data.id = props.id;
    data.status = "COMPLETED";
    data.disease = inputFields;
    dispatch(updateAppointment(data));
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
        description: "Appointment is updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(doctorUpcomingAppointments());
  };

  return (
    <>
      <FiEdit onClick={onOpen} />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Appointment Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(updateAppHandle)}>
              <FormControl mt={4}>
                <FormLabel>Disease</FormLabel>

                {inputFields.map((field, index) => (
                  <div key={index}>
                    <Input
                      type="text"
                      value={field.value}
                      onChange={(event) => handleInputChange(index, event)}
                      />
                    <button
                      type="button"
                      onClick={() => handleRemoveField(index)}
                      >
                      Remove
                    </button>
                  </div>
                ))}
                </FormControl>
                <HStack justify={"space-between"}>
                  <Button m={"5px auto"} type="button" onClick={handleAddField}>
                    Add Field
                  </Button>
                  <Button type="submit">Submit</Button>
                </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateAppointment;
