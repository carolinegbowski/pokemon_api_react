import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Router from './components/Router';
import TeamContext from './components/TeamContext';
import Lookup from './containers/Lookup';
import Team from './containers/Team';
import pokemonLogo from './pokemonLogo.png';


import { Box, Image } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset'
import { Route } from 'react-router-dom';


function App() {

  const [team, setTeam] = useState([]);

  function addToTeam(data) {
    let currentTeam = [...team];
    currentTeam.push(data);
    setTeam(currentTeam);
  }

  function removeFromTeam(data) {
    let currentTeam = [...team];
    let id = currentTeam.indexOf(data);
    currentTeam.splice(id, 1);
    setTeam(currentTeam);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box height='1250px' className="App">
      <Image py="25px" height="250px" src={pokemonLogo} alt="Pokemon"></Image>
      <Header/>
      <TeamContext.Provider value={{team:team, addToTeam:addToTeam, removeFromTeam:removeFromTeam}}>
        <Route path='/lookup' component={Lookup} />
        <Route path='/team' component={Team} />
      </TeamContext.Provider>
      

      {/* <Router/> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
