import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { deleteAppointment } from "./../../store/Appointment/AppointmentAction";
import { useDispatch, useSelector } from "react-redux";
import { userUpcomingAppointments } from "./../../store/Appointment/AppointmentsAction";
import { MdDeleteOutline } from "react-icons/md";
import { clearAppError } from "../../store/Appointment/Appointment";

const CancelAppointment = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const dispatch = useDispatch()
    const id = props.id;
    const { error,success } = useSelector((state) => state.appointment);
    const toast = useToast();
    const deleteHandler = (id)=>{
      dispatch(deleteAppointment(id));
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
          description: "Appointment is cancelled",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      dispatch(userUpcomingAppointments());
    }

    return (
      <>
        <MdDeleteOutline onClick={onOpen}/>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Cancel Appointment
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={()=>deleteHandler(id)} ml={3}>
                    Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default CancelAppointment;