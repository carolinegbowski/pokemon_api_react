import React, { useState, useEffect } from 'react';
import { Input } from '@rebass/forms';
import { Box, Image, Heading, Text, Flex, Card, Button} from 'rebass';
import Pokemon from '../components/Pokemon';
import TeamContext from '../components/TeamContext';
import TeamButton from '../components/TeamButton';

const Lookup = () => {
    const [data, setData] = useState({});
    const [query, setQuery] = useState("");
    const [team, setTeam] = useState([])
    
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
        <Box height='1250px' className="App">
            <Heading fontSize='20px' color='#3B4CCA' pt="40px">ENTER POKEMON NAME</Heading>
            <Flex py="20px">
                <Box width={1/3}></Box>
                <Input width={1/3} id="name" name="name" onChange={e => setQuery(e.target.value)} />
                <Box width={1/3}></Box>
            </Flex>
            <Button width='130px' mx='3px' backgroundColor='#3B4CCA' color='#FFDE00' onClick={e => setUrl(`http://pokeapi.co/api/v2/pokemon/${query}`)}>Search</Button>
            <Button width='130px' mx='3px' backgroundColor='#3B4CCA' color='#FFDE00' onClick={e => setRandom()}>Random</Button>
            {isLoading ? 
                (<p>Loading...</p>) :
                (<div>
                    <Pokemon name={data.name} number={data.id} image={data.sprites.front_default} type={data.types[0].type.name} weight={data.weight} />
                    <TeamButton name={data.name} number={data.id} image={data.sprites.front_default} type={data.types[0].type.name} weight={data.weight}/>
                </div>)}
            
            {/* <Button width='130px' mx='3px' backgroundColor='#3B4CCA' color='#FFDE00' onClick={e => addToTeam(data)}>Add to Team</Button> */}
            
        </Box>        
    )
}

export default Lookup;