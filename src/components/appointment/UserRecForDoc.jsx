import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { IoOpenOutline } from "react-icons/io5"
import { userRecordForDoc } from "../../store/Appointment/AppointmentsAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const UserRecForDoc = ({userId}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userRecordForDoc(userId));
    }, []);
    const {records} = useSelector((state) => state.records);
    return (
        <>
        <IoOpenOutline onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* appointments */}
              <Text>Records</Text>
              {records && records.map((e)=>{
                return (<Box                 minW={"90%"}
                gap={6}
                p={"20px"}
                fontFamily={"Outfit"}
                boxShadow="2px 2px 4px 2px #48484814"
                border="2px solid #48484814"><Text>{moment(e.scheduleDate).format("DD/MM/YYYY hh:mm A")}</Text><Text>{e.disease.map(e=>{return <span style={{marginRight:"3px"}}>{e}</span>})}</Text></Box>)
              })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default UserRecForDoc