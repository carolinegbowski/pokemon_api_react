import React from 'react';
import { Button, Card, Image, Heading, Flex } from 'rebass';
import TeamContext from '../components/TeamContext';
import Pokemon from '../components/Pokemon';
import { classBody } from '@babel/types';

const Team = (props) => {
return (
  <TeamContext.Consumer>
      {({team, removeFromTeam}) => {
            console.log(team);
            let myTeam = team.map(data => {
            return (
                <Pokemon name={data.name} number={data.id} image={data.image} type={data.type} weight={data.weight} />
            )
            })
            return <Flex flexWrap='wrap'>{ myTeam }</Flex>
        }
      }
    </TeamContext.Consumer>
  )
}

export default Team;