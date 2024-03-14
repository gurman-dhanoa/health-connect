import { Box, Flex, Heading, Image, useMediaQuery, } from "@chakra-ui/react";
import Button from "./../components/elements/Button"
import LandingPageDoctor from "./../images/Landing-page-doctor.png";
import Doctors from "./Doctors/Doctors";

const Landing = () => {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Flex justify="space-between" align="center" gap={7} wrap={"wrap"} my={10} w={"85dvw"} mx={"auto"} >
        <Box m={2} flex={1}>
          <Heading fontFamily="'Assistant', sans-serif" fontWeight={800} >
            Revolutionizing Healthcare - Your Medical History, Our Responsibility
          </Heading>
          <p style={{ display: "inline-block", fontSize: "1.2rem", lineHeight: "1.5rem", marginTop: "25px", marginBottom: "50px", fontFamily: "'Assistant', sans-serif", fontWeight: 300, }}> 
            Managing your healthcare can be a daunting task, especially when you need to keep track of multiple medical records and appointments. Our online healthcare platform is designed to streamline your healthcare experience by providing a centralized database to track your medical history.
          </p>
          <Button className="button">Know More</Button>
        </Box>
        {!isSmallerThan768 && <Image src={LandingPageDoctor} alt="Health Connect" w={"40dvw"} maxW={"400px"} borderRadius={4} boxShadow={"2px 2px 6px black"} />}
      </Flex>
      <Doctors />
    </>
  );
};

export default Landing;
