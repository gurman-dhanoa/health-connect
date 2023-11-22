import { Button, FormControl, FormLabel, HStack, Input, Select } from '@chakra-ui/react';
import { City, State } from 'country-state-city';
import React, { useEffect, useState } from 'react';

const DoctorFilter = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [state,setState]= useState('');
  const [city,setCity]= useState('');
  const [rating, setRating] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, state, city, rating, specialization });
    };

    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    useEffect(() => {
        // Fetch the list of states
        const allStates = State.getStatesOfCountry("IN");
        setStates(allStates.map((state) => state.name));
    }, []);
    const handleStateChange = (event) => {
        const newState = event.target.value;
        setState(newState);
    
        // Fetch the list of districts for the selected state
        const stateInfo = State.getStatesOfCountry("IN").find((state) => state.name === newState);
        if (stateInfo) {
          const stateDistricts = City.getCitiesOfState(stateInfo.countryCode,stateInfo.isoCode);
          setDistricts(stateDistricts.map((district) => district.name));
        } else {
          setDistricts([]);
        }
      };
      const handleDistrictChange = (event) => {
        const newDistrict = event.target.value;
        setCity(newDistrict);
      };
      const homeSearchInput = {
        background: "rgba(217, 217, 217, 0.5)",
        border: "2.5px solid rgba(0, 0, 0, 0.16)",
        borderRadius: "50px",
        width: "20%",
        minWidth:"200px",
      };
      const homeButton = {
        backgroundColor: "rgba(76, 148, 229, 0.84)",
        borderRadius: "50px",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 400,
        color: "white",
      };
  return (
    <form onSubmit={handleSubmit}>
    <HStack wrap={"wrap"} justify={"center"} w={"90vw"}>
        <Input style={homeSearchInput} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Doctor name'/>

      <Select style={homeSearchInput} onChange={handleStateChange} w={"200px"} value={state} placeholder='Select State'>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>
      <Select style={homeSearchInput} w={"200px"} onChange={handleDistrictChange} value={city}>
        <option value="">Select a district</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </Select>  
        <Input style={homeSearchInput} type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder='Rating'/>
        <Input style={homeSearchInput} type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder='Specialization'/>
      <Button style={homeButton} type="submit">Search</Button>
    </HStack>
    </form>
  );
};

export default DoctorFilter;
