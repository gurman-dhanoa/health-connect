import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyserAppointments } from "../../store/Appointment/AppointmentsAction";
import Loader from "../../components/Loader/Loader";
import AnalyserFilter from "../../components/filter/AnalyserFilter";
import { Text } from "@chakra-ui/react";
import Analyser from "./analyser";

const AnalyserApp = () => {
  const [stateInfo, setStateInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(analyserAppointments({}));
  }, []);
  const { appointments } = useSelector((state) => state.appointments);
  const handleFilterSubmit = (filters) => {
    dispatch(analyserAppointments(filters));
  };

  return !appointments ? (
    <Loader />
  ) : (
    <div>
      <AnalyserFilter onSubmit={handleFilterSubmit} setStateInfo={setStateInfo}/>
      {appointments.map((app) => (
        <li key={app._id}>{`${app.location.state.name} - Age: ${
          app.age
        }, Diseases: ${app.disease.join(", ")}`}</li>
      ))}
      <Text>Total appointments : {appointments.length}</Text>
      {/* {stateInfo && <Text>{stateInfo.name} : {stateInfo.latitude},{stateInfo.longitude}</Text>} */}
      {stateInfo && <Text>{stateInfo.name} : {stateInfo.latitude},{stateInfo.longitude}</Text>}
      {stateInfo && <Analyser coordinates={{lat:Number(stateInfo.latitude),lng:Number(stateInfo.longitude)}} label={appointments.length}/>}
    </div>
  );
};

export default AnalyserApp;
