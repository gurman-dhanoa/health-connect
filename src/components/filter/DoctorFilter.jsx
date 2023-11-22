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
  return (
    <form onSubmit={handleSubmit}>
    <HStack spacing={3} justify={"center"} wrap={"wrap"} w={"90vw"} m={"auto"} border={"2.5px solid rgba(0, 0, 0, 0.16)"} p={5} borderRadius={5}>
      <FormControl w={"250px"}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </FormControl>
      <FormControl w={"250px"}>
        <FormLabel>State:</FormLabel>
      <Select onChange={handleStateChange} value={state}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>
      </FormControl>
      <FormControl w={"250px"}>
        <FormLabel>City:</FormLabel>
      <Select onChange={handleDistrictChange} value={city}>
        <option value="">Select a district</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </Select>
      </FormControl>
      <FormControl w={"250px"}>
        <FormLabel>Rating:</FormLabel>     
        <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </FormControl>
      <FormControl w={"250px"}>
        <FormLabel>Specialization:</FormLabel>     
        <Input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
      </FormControl>
      <Button type="submit">Search</Button>
    </HStack>
    </form>
  );
};

export default DoctorFilter;
