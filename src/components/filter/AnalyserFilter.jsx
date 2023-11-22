import { Button, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { State } from 'country-state-city';
import React, { useEffect, useState } from 'react';

const AnalyserFilter = ({ onSubmit, setStateInfo }) => {
  const [diseases, setDiseases] = useState('');
  const [state,setState]= useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ diseases, state, minAge, maxAge });
      const stateInfo = State.getStatesOfCountry("IN").find(
        (s) => s.name === state
      );
      if (stateInfo) {
        setStateInfo(stateInfo)
      } else {
        setStateInfo(null);
      }
    };

    const [states, setStates] = useState([]);
    useEffect(() => {
        // Fetch the list of states
        const allStates = State.getStatesOfCountry("IN");
        setStates(allStates.map((state) => state.name));
    }, []);
  return (
    <form onSubmit={handleSubmit}>
    <Stack spacing={3} maxW={"90vw"} w={"500px"} m={"auto"} border={"2.5px solid rgba(0, 0, 0, 0.16)"} p={5} borderRadius={5}>
      <FormControl>
        <FormLabel>Disease:</FormLabel>
        <Input type="text" value={diseases} onChange={(e) => setDiseases(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>State:</FormLabel>
      <Select onChange={(e)=>setState(e.target.value)} value={state}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Min Age:</FormLabel>     
        <Input type="number" value={minAge} onChange={(e) => setMinAge(e.target.value)} />
      <FormControl>
      </FormControl>
        <FormLabel>Max Age:</FormLabel>     
        <Input type="number" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} />
      </FormControl>
      <Button type="submit">Search</Button>
    </Stack>
    </form>
  );
};

export default AnalyserFilter;
