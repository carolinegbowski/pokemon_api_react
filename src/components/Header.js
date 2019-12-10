import React from 'react';
import Link from './StyledLink';
import { Box, Image, Heading, Text, Flex, Card, Button} from 'rebass';


const Header = () => {
    return (
        <Flex>
            <Box p={3} width={2/6}></Box>
            <Box p={3} width={1/6}>
                <Link to='/lookup'>SEARCH </Link>
            </Box>
            <Box p={3} width={1/6}>
                <Link to='/team'> MY TEAM</Link>
            </Box>
            <Box p={3} width={2/6}></Box>
        </Flex>
    )
}

export default Header;