import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import { Input, Label } from '@rebass/forms';
import { Box, Button, Flex, Heading, Text, Image } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset'
import pokemonLogo from './pokemonLogo.png';


function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  
  const [url, setUrl] = useState(`http://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    const sendData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(url);
        const output = await response.json();
        setData(output);
      } catch (error) {
        setIsError(true);
      }; 
      setIsLoading(false);
    };
  sendData();
  }, [url] );


  const setRandom = () => {
    setUrl(`http://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box height='1250px' className="App">
      {/* {isLoading && <p>Loading...</p>} */}
      <Image py="25px" height="250px" src={pokemonLogo} alt="Pokemon"></Image>
      <Heading fontSize='20px' color='#3B4CCA' pt="40px">ENTER POKEMON NAME</Heading>
      {/* <Label textAlign="center" htmlFor="name">Enter Pokemon Name</Label> */}
      <Flex py="20px">
        <Box width={1/3}></Box>
          <Input width={1/3} id="name" name="name" onChange={e => setQuery(e.target.value)} />
        <Box width={1/3}></Box>
      </Flex>
      <Button width='100px' mx='3px' backgroundColor='#3B4CCA' color='#FFDE00' onClick={e => setUrl(`http://pokeapi.co/api/v2/pokemon/${query}`)}>Search</Button>
      <Button width='100px' mx='3px' backgroundColor='#3B4CCA' color='#FFDE00' onClick={e => setRandom()}>Random</Button>
      {isLoading ? 
        (<p>Loading...</p>) :
        (<Pokemon name={data.name} id={data.id} image={data.sprites.front_default} weight={data.weight}/>)
      }
      {isError && <Text>Error in request</Text>}
      </Box>
    </ThemeProvider>
  );
}

export default App;
