import React from 'react';
import { Button } from 'rebass';
import TeamContext from './TeamContext';


const TeamButton = (props) => {
    return (
        <TeamContext.Consumer>
            {({team, addToTeam}) => (
                (team.length < 6 && 
                <Button onClick={e => addToTeam(props)}>
                    Add to Team
                </Button>)
            )}
        </TeamContext.Consumer>
    )
}

export default TeamButton;
