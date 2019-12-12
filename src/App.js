import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Router from './components/Router';
import TeamContext from './components/TeamContext';
import Lookup from './containers/Lookup';
import Team from './containers/Team';
import pokemonLogo from './pokemonLogo.png';


import { Box, Image, Button } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset'
import { Route } from 'react-router-dom';


function App() {

  const useStateWithSessionStorage = sessionStorageKey => {
    // will either return us the value associated with the key or null
    const [token, setToken] = useState(sessionStorage.getItem(sessionStorageKey) || '')
    return [token, setToken];
  }

  const [token, setToken] = useStateWithSessionStorage('token');
  const [inputUser, setInputUser] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [authError, setIsAuthError] = useState(false);

  // hook that makes sure we store token in browser anytime we set it in state
  // A hook (more generally) calls a function every time a certain variable changes value
  useEffect(() => {
    sessionStorage.setItem('token', token);
  }, [token])

  const getToken = async () => {
    setIsAuthError(false);
    try {
      const endpoint = 'http://localhost:5000/api/login';
      const data = {
        username: inputUser,
        password: inputPassword
      }
      const configs = {
        method: 'POST',
        body: JSON.stringify(data), 
        mode: 'cors',
        headers: {'Content-type' : 'application/json'}
      }
      const res = await fetch(endpoint, configs);
      const auth_info = await res.json();
      console.log(auth_info);
      if (auth_info.token) {
        setToken(auth_info.token)
      } else {
        setIsAuthError(true);
      }
    } catch (err) {
      console.log(err);
      setIsAuthError(true);
    }
  }

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

  let data = null;

  if (token) {
    data = (
      <TeamContext.Provider value={{team:team, addToTeam:addToTeam, removeFromTeam:removeFromTeam}}>
        <Route path='/lookup' component={Lookup} />
        <Route path='/team' component={Team} />
        <Button onClick={e => setToken('')}>Logout</Button>
      </TeamContext.Provider>
    )
  } else {
    data = (
      <div>
        <input type="text" onChange={e => setInputUser(e.target.value)} placeholder='Username'/>
        <input type="password" onChange={e => setInputPassword(e.target.value)} placeholder='Password'/>
        <Button onClick={e => getToken()}>Log In</Button>
        {authError && <p>Authentication Error</p>}
      </div>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Box height='1250px' className="App">
      <Image py="25px" height="250px" src={pokemonLogo} alt="Pokemon"></Image>
      <Header/>
      {/* {token ? <App/> : <Login/>} */}
      {data}
      </Box>
    </ThemeProvider>
  );
}

export default App;
