import { Box, Button, FormControl, FormLabel, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import signup from "../images/signup.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { User_Signup } from '../Redux/action';

const Signup = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [name,setName]=useState('');
  const [location,setLocation]=useState('');
  const [phone,setPhone]=useState('');

  const toast = useToast()
  const dispatch=useDispatch()
  const navitage=useNavigate();

  function HandleSignup(e){
    e.preventDefault()
    let obj={email,password}
    dispatch(User_Signup(obj))
    .then((res)=>{
      if(res){
        toast({
          positions:"top",
          title: 'Account created.',
          description: "Your account has been created successfully.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        navitage("/")
      }else{
        toast({
          position:"top",
          title: 'Soemthing went Wrong.',
          description: "Please fill all the details.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }

    }).catch((err)=>{
      console.log(err);
      toast({
        position:"top",
        title: 'Soemthing went Wrong.',
        description: "Please fill all the details.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    })

  }
  return (
    <div>
      <Box display={'flex'} m={'auto'} w='70%' mt='10' borderRadius={'10px'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} >
<Box alignSelf={'center'}  >
<Image src={signup} w={'550px'} p='5' ></Image>
</Box>
        <Box mt='10' w='40%'>
          <Text fontSize={'30'} fontWeight={'semibold'}>Signup Page</Text>
        <FormControl p={'5'} isRequired>
        <FormLabel>Name:</FormLabel>
          <Input mb={'3'} value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Enter Your Name' />
          <FormLabel>Email:</FormLabel>
          <Input mb={'3'} value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email' />
          <FormLabel>Password:</FormLabel>
          <Input mb='3' value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Your Password' />
          <FormLabel>Location:</FormLabel>
          <Input mb={'3'} value={location} onChange={(e)=>setLocation(e.target.value)} type='text' placeholder='Enter Your Location' />
          <FormLabel>Phone Number:</FormLabel>
          <Input mb='3' value={phone} onChange={(e)=>setPhone(e.target.value)} type='number' placeholder='Enter Your Phone Number' />
          <Link to={"/"} ><Text  color='blue' textDecor={'underline'}>Already have a account?</Text></Link>
          <Button mt='3' pl='5' pr='5' bg={'#03A9F4'} color={'white'}  _hover={{bg:'#0a8cc9',color:"white"}} onClick={HandleSignup}>Signup</Button>
</FormControl>
      </Box>
      </Box>
    </div>
  )
}

export default Signup