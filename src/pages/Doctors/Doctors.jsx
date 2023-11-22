import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import React from "react";
import Loader from "../../components/Loader/Loader";
import DoctorCard from "../../components/doctorCard/DoctorCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../store/Doctor/DoctorsAction";
import { useEffect } from "react";
import DoctorFilter from "../../components/filter/DoctorFilter";

const Doctors = () => {
  const homeSearchInput = {
    background: "rgba(217, 217, 217, 0.5)",
    border: "2.5px solid rgba(0, 0, 0, 0.16)",
    borderRadius: "50px",
    width: "20%",
    minWidth:"100px",
    color: "#ffffff",
  };
  const homeButton = {
    backgroundColor: "rgba(76, 148, 229, 0.84)",
    borderRadius: "50px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
    color: "white",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors({}));
  }, []);
  const handleFilterSubmit = (filters) => {
    dispatch(getAllDoctors(filters));
  };
  const {loading,doctors} = useSelector((state) => state.doctors);
  return (
    <VStack gap={3} m={"30px"}>
      {/* <HStack width={"60vw"} justify={"center"}>
        <Input style={homeSearchInput} placeholder="Specialty or  Name " />
        <Button style={homeButton}>Search</Button>
      </HStack> */}
      <DoctorFilter onSubmit={handleFilterSubmit}/>
        {
            loading?<Loader/>:doctors.map((e)=>{return <DoctorCard doctor={e}/>})
        }
    </VStack>
  );
};

export default Doctors;
