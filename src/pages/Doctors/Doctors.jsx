import { Button, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import Loader from "../../components/Loader/Loader";
import DoctorCard from "../../components/doctorCard/DoctorCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../store/Doctor/DoctorsAction";
import { useEffect } from "react";
import DoctorFilter from "../../components/filter/DoctorFilter";

const Doctors = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors({}));
  }, []);
  const handleFilterSubmit = (filters) => {
    dispatch(getAllDoctors(filters));
  };
  const { loading, doctors } = useSelector((state) => state.doctors);
  return (
    <>
      <DoctorFilter onSubmit={handleFilterSubmit} />
      <Flex flexDir={"column"} align={"center"} gap={10} my={10}>
      { loading ? <Loader /> : doctors.map((e) => { return <DoctorCard doctor={e} /> })}
      </Flex>
    </>
  );
};

export default Doctors;
