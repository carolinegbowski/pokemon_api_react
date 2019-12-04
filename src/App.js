import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import { Input, Label } from '@rebass/forms';
import { Box, Button, Flex } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset'

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const sendData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${query}`);
      const output = await response.json();
      setData(output);
    } catch (error) {
      setIsError(true);
    }; 
    setIsLoading(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
      {/* {isLoading && <p>Loading...</p>} */}
      {isError ? <p>Error in request</p> : <p>No Errors</p>}
      <Flex py="20px">
        <Box width={1/3}></Box>
          {/* <Label htmlFor="name">Name</Label> */}
          <Input width={1/3} id="name" name="name" onChange={e => setQuery(e.target.value)} />
        <Box width={1/3}></Box>
      </Flex>
      <Button onClick={e => sendData()}>Search</Button>
      {isLoading ? 
        (<p>Loading...</p>) :
        (<Pokemon name={data.name} id={data.id} image={data.sprites.front_default}/>)
      }
      </Box>
    </ThemeProvider>
  );
}

export default App;
