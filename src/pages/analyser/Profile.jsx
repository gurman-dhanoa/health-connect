import { Box, Heading, Stack, Text, VStack, FormControl } from "@chakra-ui/react";
import {useSelector} from 'react-redux';
import moment from "moment";

const AnalyserProfile = () => {
  const {analyser} = useSelector((state) => state.analyser);
  return (
    <VStack className="loginBgStyle" align={"flex-start"} m={"auto"}>
      <Box margin={"50px auto"}>
        <Heading color="black">Your Profile</Heading>
        <Box className="loginBgStyleBox">
          <form>
          <Stack spacing={4} m={4}>
            <FormControl>
              <Text className="profileLabel">Name</Text>
              <Text className="profileValue">{analyser.name}</Text>
            </FormControl>
            <FormControl  isRequired>
              <Text className="profileLabel">Email Address</Text>
              <Text className="profileValue">{analyser.email}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Gender</Text>
              <Text className="profileValue">{analyser.gender}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Date Of Birth</Text>
              <Text className="profileValue">{moment(analyser.dateOfBirth).format('DD MM YYYY')}</Text>
            </FormControl>

            <Text fontFamily={"Outfit"}><b>Permanent Address</b></Text>

            <FormControl  isRequired>
              <Text className="profileLabel">Street</Text>
              <Text className="profileValue">{analyser.address.street}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">City</Text>
              <Text className="profileValue">{analyser.address.city}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Pincode</Text>
              <Text className="profileValue">{analyser.address.pincode}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">State</Text>
              <Text className="profileValue">{analyser.address.state.name}</Text>
            </FormControl>

            <FormControl  isRequired>
              <Text className="profileLabel">Contact Number</Text>
              <Text className="profileValue">{analyser.contactNumber}</Text>
            </FormControl>
            </Stack>
          </form>
        </Box>
      </Box>
    </VStack>
  );
};

export default AnalyserProfile