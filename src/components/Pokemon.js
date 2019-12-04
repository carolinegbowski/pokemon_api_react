import React from 'react';
import { Box, Image, Heading, Text } from 'rebass';

const pokemon = (props) => {
    return (
        <Box
        sx={{
            justifyContent: 'center', 
            textAlign: 'center', 
        }}>
        <Image src={props.image} alt={props.name}/>
        <Heading>{props.name}</Heading>
        <Text>{props.id}</Text>
        </Box>    
    )
}

export default pokemon