import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Switch,
} from "@chakra-ui/react";
import {
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  updateRemark,
} from "./../../store/Appointment/AppointmentAction";
import { useDispatch } from "react-redux";
import { userUpcomingAppointments } from "./../../store/Appointment/AppointmentsAction";
import { useForm } from "react-hook-form";
import { MdEditCalendar } from "react-icons/md";
import { createReview } from "../../store/User/UserAction";

const UpdateRemark = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [giveReview, setGiveReview] = useState(false);
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(null)
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const alloteHandler = (data) => {
    data["id"] = props.id;
    data["status"] = "CLOSED";
    dispatch(updateRemark(data));
    onClose();
    if (giveReview) {
      const review = { doctorId: props.doctorId,rating: rating,comment:comment};
      dispatch(createReview(review));
    }
    dispatch(userUpcomingAppointments());
  };
  return (
    <>
      <MdEditCalendar onClick={onOpen} />
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Remark</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit(alloteHandler)}>
              <FormControl>
                <FormLabel>Remark</FormLabel>
                <Textarea {...register("remark")} />
              </FormControl>
              <FormControl>
                <FormLabel>Make appointment private</FormLabel>
                <Switch {...register("private")} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Want to give your feedback?</FormLabel>
                <Switch value={giveReview} onChange={e=>setGiveReview(e.target.value)}/>
              </FormControl>
              {giveReview && <>
                <FormControl>
                  <FormLabel>Ranting</FormLabel>
                  <Input type="Number" value={rating} onChange={e=>setRating(e.target.value)} placeholder="Rating out of 5"/>
                </FormControl>
                <FormControl>
                  <FormLabel>Review</FormLabel>
                  <Textarea value={comment} onChange={e=>setComment(e.target.value)} placeholder="Your feedback"/>
                </FormControl>
              </>}
              <Button type="submit" mt={3}>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateRemark;
