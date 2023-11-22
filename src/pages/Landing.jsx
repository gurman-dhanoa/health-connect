import { Box, Button, Flex, Heading, Image, } from "@chakra-ui/react";
import LandingPageDoctor from "./../images/Landing-page-doctor.png";
import Doctors from "./Doctors/Doctors";

const Landing = () => {
  const homeButton = {
    backgroundColor: "rgba(76, 148, 229, 0.84)",
    borderRadius: "50px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 400,
    color: "white",
  };
  return (
    <>
    <Flex
      justify="space-between"
      align="center"
      mx={14}
      gap={10}
      wrap={"wrap"}
      my={10}
    >
      <Box m={2} w={"50vw"}>
        <Heading
          fontSize="2.5rem"
          fontFamily="'Assistant', sans-serif"
          lineHeight="3.5rem"
          fontWeight={800}
        >
          Revolutionizing Healthcare -<br /> Your Medical History, Our
          Responsibility
        </Heading>
        <p
          style={{
            display: "inline-block",
            fontSize: "1.2rem",
            lineHeight: "1.5rem",
            marginTop: "25px",
            marginBottom: "50px",
            fontFamily: "'Assistant', sans-serif",
            fontWeight: 300,
          }}
        >
          Managing your healthcare can be a daunting task, especially when you
          need to keep track of multiple medical records and appointments. Our
          online healthcare platform is designed to streamline your healthcare
          experience by providing a centralized database to track your medical
          history.
        </p>
        <Button style={homeButton}>Know More</Button>
      </Box>
      <Image src={LandingPageDoctor} alt="Clinic On Cloud" h="60vh" />
    </Flex>
    <Doctors/>
    </>
  );
};

export default Landing;
