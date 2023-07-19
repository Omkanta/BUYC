import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box  boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 10px'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
        <Text fontSize={'30'} fontWeight={'semibold'} w={'15%'}>BUYC</Text>
        <Box display={'flex'} w={'20%'} justifyContent={'space-between'}>
          <Link to={"/"}><Text mt={'3'} fontWeight={'semibold'}>Login</Text></Link>
          <Link to={"/signup"}><Text mt={'3'} fontWeight={'semibold'}>Signup</Text></Link>
        </Box>
      </Box>
    </div>
  )
}

export default Navbar