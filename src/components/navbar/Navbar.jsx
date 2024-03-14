import { Avatar, Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, useMediaQuery,
} from "@chakra-ui/react";
import Button from "./../elements/Button"
import React from "react";
import { userLogout } from "../../store/User/UserAction";
import { doctorLogout } from "../../store/Doctor/DoctorAction";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./../../images/logo.svg"
import smallLogo from "./../../images/smallLogo.svg"
import { analyserLogout } from "../../store/Analyser/AnalyserAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  
  const { isAuthenticatedUser, user } = useSelector((state) => state.user);
  const { isAuthenticatedDoctor, doctor } = useSelector((state) => state.doctor);
  const { isAuthenticatedAnalyser, analyser } = useSelector((state) => state.analyser);
  
  const userLogoutHandler = () => {
    dispatch(userLogout());
    navigate("/");
  }
  const doctorLogoutHandler = () => {
    dispatch(doctorLogout());
    navigate("/");
  }
  const analyserLogoutHandler = () => {
    dispatch(analyserLogout());
    navigate("/");
  }

  return (
    <Flex m={"auto"} width={"80dvw"} justify={"space-between"} my={3}>
      <Box display="flex" gap={7} alignItems="center">
        <Link to="/"><Image src={isSmallerThan768?smallLogo:logo} alt="Health Connect"/></Link>
      </Box>
      <Flex gap={3} align={"center"}>
        {!isAuthenticatedDoctor && !isAuthenticatedAnalyser && <Link to="/doctors">
          <Button className="button">
            Find Doctor
          </Button>
        </Link>}

        {!isAuthenticatedUser && !isAuthenticatedDoctor && !isAuthenticatedAnalyser && (
          <Link to="/login">
            <Button className="button">Join</Button>
          </Link>
        )}

        {isAuthenticatedUser && (
            <Menu>
              <MenuButton>
                <Avatar name={user.name} src={(user)?user.image.url:"https://bit.ly/dan-abramov"} />
              </MenuButton>
              <MenuList>
                <Link to="/user/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link to="/user/appointments">
                  <MenuItem>Appointments</MenuItem>
                </Link>
                <Link to="/user/records">
                  <MenuItem>Records</MenuItem>
                </Link>
                <Link to="/user/privateRecords">
                  <MenuItem>Private Records</MenuItem>
                </Link>
                <MenuItem onClick={() => userLogoutHandler()}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
        )}

        {isAuthenticatedDoctor && (
            <Menu>
              <MenuButton>
                <Avatar name={doctor.name} src={(doctor)?doctor.image.url:"https://bit.ly/dan-abramov"} />
              </MenuButton>
              <MenuList>
                <Link to="/doctor/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link to="/doctor/appointments">
                  <MenuItem>Appointments</MenuItem>
                </Link>
                <Link to="/doctor/records">
                  <MenuItem>Records</MenuItem>
                </Link>
                <Link to="/doctor/reviews">
                  <MenuItem>Reviews</MenuItem>
                </Link>
                <MenuItem onClick={() => doctorLogoutHandler()}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
        )}
        {isAuthenticatedAnalyser && (
            <Menu>
              <MenuButton>
                <Avatar name={analyser.name} src={(analyser)?analyser.image.url:"https://bit.ly/dan-abramov"} />
              </MenuButton>
              <MenuList>
                <Link to="/analyser/profile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link to="/analyser/country">
                  <MenuItem>Country</MenuItem>
                </Link>
                <Link to="/analyser/state">
                  <MenuItem>State</MenuItem>
                </Link>
                <MenuItem onClick={() => analyserLogoutHandler()}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
