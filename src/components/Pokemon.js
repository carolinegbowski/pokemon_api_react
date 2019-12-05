import React from 'react';
import { Box, Image, Heading, Text, Flex } from 'rebass';

const pokemon = (props) => {
    return (
        <Box
        sx={{
            justifyContent: 'center', 
            textAlign: 'center', 
            padding: '75px'
        }}>
            <Image py="25px" src={props.image} alt={props.name}/>
            <Flex>
                <Box width={1/3} justifyContent='left'></Box>
                <Box width={1/3}
                sx={{
                    justifyContent: 'center', 
                    textAlign: 'center',
                    color: '#3B4CCA'
                }}>
                    <Heading>{props.name}</Heading>
                    <Text>{props.id}</Text>
                </Box>
                <Box width={1/3}></Box>
            </Flex>
        </Box>
    )
}

export default pokemon