import React, { useState, useEffect } from 'react';
import { City, State } from 'country-state-city';
import { FormControl, Select, Stack } from '@chakra-ui/react';

const StateDistrictLocation = ({state,city}) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch the list of states
    const allStates = State.getStatesOfCountry("IN");
    setStates(allStates.map((state) => state.name));
  }, []);

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    state(newState);

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
    setSelectedDistrict(newDistrict);
    city(newDistrict);
  };

  return (
    <Stack spacing={4}>
      <FormControl isRequired>
      <Select onChange={handleStateChange} value={selectedState}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>
      </FormControl>
      <FormControl isRequired>
      <Select onChange={handleDistrictChange} value={selectedDistrict}>
        <option value="">Select a district</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </Select>
      </FormControl>
    </Stack>
  );
};

export default StateDistrictLocation;
