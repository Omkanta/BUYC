import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { LOGOUT_SUCCESSFULL } from '../Redux/actionType';

const Navbar = () => {
  let {isAuth}=useSelector((store)=>{return store.reducer});
let dispatch=useDispatch()
  function HandleLogOut(){
    dispatch({type:LOGOUT_SUCCESSFULL})

    console.log("Logout Successfull");
  }
  return (
    <div>
      <Box  boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 10px'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'}>
        <Text fontSize={'30'} fontWeight={'semibold'} w={'15%'}>BUYC</Text>
        <Box display={'flex'} w={'20%'} justifyContent={'space-between'}>
         {isAuth?<Link to={"/"}><Text onClick={()=>HandleLogOut} mt={'3'} fontWeight={'semibold'}>Logout</Text></Link>:<Link to={"/"}><Text mt={'3'} fontWeight={'semibold'}>Login</Text></Link>} 
          <Link to={"/signup"}><Text mt={'3'} fontWeight={'semibold'}>Signup</Text></Link>
        </Box>
      </Box>
    </div>
  )
}

export default Navbar