import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { checkUser } from "./store/User/UserAction";
import { checkDoctor } from "./store/Doctor/DoctorAction";

// Components
import Navbar from "./components/navbar/Navbar";

// Public pages
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Doctors from "./pages/Doctors/Doctors";
import LoginPage from "./pages/LoginPage";
import DoctorDetails from "./pages/doctor/DoctorDetails";

// Doctor
import DoctorLogin from "./pages/doctor/auth/Login";
import DoctorRegister from "./pages/doctor/auth/Register";
import DoctorProfile from "./pages/doctor/Profile";
import DoctorAppointments from "./pages/doctor/appointments/Appointments";
import Records from "./pages/doctor/appointments/Records";
import Reviews from "./pages/doctor/Reviews";

// User
import UserLogin from "./pages/user/auth/Login";
import UserRegister from "./pages/user/auth/Register";
import UserProfile from "./pages/user/Profile";
import UserAppointments from "./pages/user/appointments/Appointments";
import PrivateAppointments from "./pages/user/appointments/PrivateAppointments";
import UserRecords from "./pages/user/appointments/Records";

// Analyser
import AnalyserLogin from "./pages/analyser/auth/Login";
import AnalyserRegister from "./pages/analyser/auth/Register";
import { checkAnalyser } from "./store/Analyser/AnalyserAction";
import AnalyserCountry from "./pages/analyser/AnalyserCountry";
import AnalyserState from "./pages/analyser/AnalyserState";

// Routes
import {DoctorAuth,DoctorUnAuth} from "./routes/DoctorAuth";
import AnalyserProfile from "./pages/analyser/Profile";

function App() {
  const user = useSelector((state) => state.user);
  const doctor = useSelector((state) => state.doctor);
  const analyser = useSelector((state) => state.analyser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
    dispatch(checkDoctor());
    dispatch(checkAnalyser());
  }, []);

  return (user.loading && doctor.loading && analyser.loading) ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<DoctorAuth user={doctor}><Landing/></DoctorAuth>} />
          <Route exact path="/doctors" element={<Doctors/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/doctor/:id" element={<DoctorDetails/>} />

          {/* Doctor Routes */}
          <Route exact path="/doctor/login" element={<DoctorLogin/>} />
          <Route exact path="/doctor/Register" element={<DoctorRegister/>} />
          <Route exact path="/doctor/profile" element={<DoctorUnAuth user={doctor}><DoctorProfile/></DoctorUnAuth>} />
          <Route exact path="/doctor/appointments" element={<DoctorAppointments/>} />
          <Route exact path="/doctor/records" element={<Records/>} />
          <Route exact path="/doctor/reviews" element={<Reviews/>} />
          
          {/* User Routes */}
          <Route exact path="/user/login" element={<UserLogin/>} />
          <Route exact path="/user/Register" element={<UserRegister/>} />
          <Route exact path="/user/profile" element={<UserProfile/>} />
          <Route exact path="/user/appointments" element={<UserAppointments/>} />
          <Route exact path="/user/privateRecords" element={<PrivateAppointments/>} />
          <Route exact path="/user/records" element={<UserRecords/>} />

          {/* Analyser Routes */}
          <Route exact path="/analyser/login" element={<AnalyserLogin/>} />
          <Route exact path="/analyser/Register" element={<AnalyserRegister/>} />
          <Route exact path="/analyser/profile" element={<AnalyserProfile/>} />
          <Route exact path="/analyser/country" element={<AnalyserCountry/>} />
          <Route exact path="/analyser/state" element={<AnalyserState/>} />

          {/* Not found */}
          <Route path='*' exact={true} element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;