import React from 'react';

const TeamContext = React.createContext({
    team: [],
    addToTeam: () => {},
    removeFromTeam: () => {}
});

export default TeamContext;