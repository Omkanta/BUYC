import { Box, Button, FormControl, FormLabel, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import login from "../images/login.png"
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { User_Login } from '../Redux/action';

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const dispatch=useDispatch()
  const navitage=useNavigate();
  const toast = useToast()

  function HandleLogin(e){
    e.preventDefault()
    let obj={email,password}
    dispatch(User_Login(obj))
    .then((res)=>{
      toast({
        position:"top",
        title: 'Login successfull.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navitage("/cars")
    }).catch((err)=>{
      toast({
        position:"top",
        title: 'Login Unsuccessfull.',
        description: "Please check your credentails.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      console.log(err);
    })

  }
  return (
    <div>
      <Box display={'flex'} m={'auto'} w='70%' mt='10' borderRadius={'10px'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} >
<Box  >
<Image src={login}  h={'500px'}></Image>

</Box>
        <Box mt='10'>
          <Text fontSize={'30'} fontWeight={'semibold'}>Login Page</Text>
        <FormControl p={'5'} isRequired>
          <FormLabel>Email:</FormLabel>
          <Input mb={'3'} value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email' />
          <FormLabel>password:</FormLabel>
          <Input mb='3' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Your Password' />
          <Button mt='3' pl='5' pr='5' bg={'#03A9F4'} color={'white'}  _hover={{bg:'#0a8cc9',color:"white"}} onClick={HandleLogin}>Login</Button>
</FormControl>
<Link to={"/signup"}><Text  color='blue' >Create new account</Text></Link><br />

      </Box>
      </Box>
    </div>
  )
}

export default Login