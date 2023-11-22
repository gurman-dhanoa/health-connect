import { Box, Heading, Stack, Text, VStack, FormControl } from "@chakra-ui/react";
import {useSelector} from 'react-redux';
import moment from "moment";


const DoctorProfile = () => {
  const {doctor} = useSelector((state) => state.doctor);
    return (
    <VStack className="loginBgStyle" align={"flex-start"} m={"auto"}>
      <Box margin={"50px auto"}>
        <Heading color="black">Your Profile</Heading>
        <Box className="loginBgStyleBox">
          <form>
          <Stack spacing={4} m={4}>
            <FormControl>
              <Text className="profileLabel">Name</Text>
              <Text className="profileValue">{doctor.name}</Text>
            </FormControl>
            <FormControl  isRequired>
              <Text className="profileLabel">Email Address</Text>
              <Text className="profileValue">{doctor.email}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Qualification</Text>
              <Text className="profileValue">{doctor.qualification}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Specialization</Text>
              <Text className="profileValue">{doctor.specialization}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Gender</Text>
              <Text className="profileValue">{doctor.gender}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Date Of Birth</Text>
              <Text className="profileValue">{moment(doctor.dateOfBirth).format('DD MM YYYY')}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Experience</Text>
              <Text className="profileValue">{doctor.experience}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Discription</Text>
              <Text className="profileValue">{doctor.discription}</Text>
            </FormControl>

            <Text fontFamily={"Outfit"}><b>Clinic Location</b></Text>

            <FormControl  isRequired>
              <Text className="profileLabel">Street</Text>
              <Text className="profileValue">{doctor.clinicLocation.street}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">City</Text>
              <Text className="profileValue">{doctor.clinicLocation.city}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Pincode</Text>
              <Text className="profileValue">{doctor.clinicLocation.pincode}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">State</Text>
              <Text className="profileValue">{doctor.clinicLocation.state.name}</Text>
            </FormControl>
            
            <Text fontFamily={"Outfit"}><b>Permanent Address</b></Text>

            <FormControl  isRequired>
              <Text className="profileLabel">Street</Text>
              <Text className="profileValue">{doctor.permanentAddress.street}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">City</Text>
              <Text className="profileValue">{doctor.permanentAddress.city}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Pincode</Text>
              <Text className="profileValue">{doctor.permanentAddress.pincode}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">State</Text>
              <Text className="profileValue">{doctor.permanentAddress.state.name}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Fees</Text>
              <Text className="profileValue">{doctor.fees}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Contact Number</Text>
              <Text className="profileValue">{doctor.contactNumber}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Current Status</Text>
              <Text className="profileValue">{doctor.current_status?"Available":"Not Available"}</Text>
            </FormControl>
            </Stack>
          </form>
        </Box>
      </Box>
    </VStack>
  );
};

export default DoctorProfile