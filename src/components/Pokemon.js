import React, { useState, useEffect } from 'react';
import { Input } from '@rebass/forms';
import { Box, Image, Heading, Text, Flex, Card, Button} from 'rebass';

const Pokemon = (props) => {
    return (
        <Flex py="100px" contentAlign="center">
            <Box width={2/5}></Box>
            <Card sx={{
                width: '300px',
                minHeight: '410px',
                borderRadius: '10px',
                backgroundColor: 'gold',
                contentAlign: 'center',
                textAlign: 'center'
            }}>
                <Card sx={{
                    margin: "8px", 
                    backgroundColor: 'lightgrey',
                    minHeight: '400px',
                    boxShadow: 'none'
                    }}>
                    <Heading sx={{textTransform: 'capitalize'}} color='#3B4CCA' textAlign='left' fontSize="20px" p='0'>{props.name}</Heading>
                    <Card sx={{
                        margin: '15px',
                        backgroundColor: 'gold'
                    }}>
                        <Image contentAlign="center" py="25px" src={props.image} alt={props.name}/>
                    </Card>
                    <Card backgroundColor='lightgrey' padding='30px' margin='15px'>
                        <Text color='#3B4CCA'>ID : {props.id}</Text>
                        <Text color='#3B4CCA'>Type : {props.type}</Text>
                        <Text color='#3B4CCA'>Weight : {props.weight}</Text>
                    </Card>
                </Card>
            </Card>
            <Box width={2/5}></Box>
        </Flex>
    ) 
}


export default Pokemon;