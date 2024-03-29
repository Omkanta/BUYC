import { Box, Button, Flex, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingleCar from './SingleCar'
import { useDispatch, useSelector } from 'react-redux'
import { Add_Car, Get_Car } from '../Redux/action'

const CarProducts = () => {
  const [oemData,setOemdata]=useState([]);
  const [Orig_data,setOrigData]=useState([]);
  const [odometer,setodometer]=useState('');
  const [no_scratches,setNo_scratches]=useState('');
  const [no_accidents,setNo_accidents]=useState('');
  const [orig_paint,setOrig_paint]=useState('');
  const [prev_buyers,setPrev_buyers]=useState('');
  const [reg_place,setReg_place]=useState('');
  const [model_name,setModelName]=useState('');
  const [model_year,setModelYear]=useState('');
  const [img,setImg]=useState('');
  const [filterData,setfilterData]=useState('')
  const [refresh,setRefresh]=useState(false);
  const toast = useToast()

  let dispatch=useDispatch();
  let {userID}=useSelector((store)=>{return store.reducer});
    const { isOpen, onOpen, onClose } = useDisclosure()

  // console.log(userID);

  const HandleAddCar=()=>{
let obj={
  "odometer":+odometer,
  "no_scratches":+no_scratches,
  "no_accidents":+no_accidents,
  orig_paint,
  'prev_buyers':+prev_buyers,
  reg_place,
  model_name,
  "model_year":+model_year,
  userID,img
}
// console.log(obj);
dispatch(Add_Car(obj)).then((res)=>{
  if(res){
    toast({
      positions:"top",
      title: 'Car Added.',
      description: "Your Car has been added successfully.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setRefresh((prev)=>!prev);
    onClose();
    setodometer("");
    setNo_scratches("")
    setNo_accidents("")
    setOrig_paint('')
    setPrev_buyers('')
    setReg_place('')
    setModelName('')
    setModelYear('')
    setImg('');
  }else{
    toast({
      positions:"top",
      title: 'Something wnt wrong.',
      description: "Please fill the details accordingly.",
      status: 'erroe',
      duration: 3000,
      isClosable: true,
    })
  }
})
  }

function ShowData(){
  Get_Car(filterData)
.then((res)=>{
  setOrigData(res);

})
}

  useEffect(()=>{
ShowData()
fetch("https://difficult-buckle-ray.cyclic.app/cars/oem").then((res)=>res.json())
    .then((res)=>{
        // console.log(res);
        setOemdata(res);
    }).catch(err=>console.log(err))
  },[refresh,filterData])
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tell us about your car</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Select Your Car Model <Select mb='2' value={model_name} onChange={(e)=>setModelName(e.target.value)}>
             <option value=''>--Select Car Model--</option>
              {oemData?.map((el)=>{
                return <option key={el._id} value={el.model_name}>{el.model_name}</option>
              })}
            </Select>
            Select Model Year of Your Car<Select mb='2' value={model_year} onChange={(e)=>setModelYear(e.target.value)}>
            <option value=''>--Select Year Model of Car--</option>
              {oemData?.map((el,index)=>{
                return <option key={el._id} value={index+2010}>{index+2010}</option>
              })}
            </Select>
          KMs on Oodometer <Input mb='2' placeholder='Enter KMs' type='nunber' value={odometer} onChange={(e)=>setodometer(e.target.value)}/>
          Number of Scratches <Input mb='2' placeholder='Enter Number of Scratches' type='nunber' value={no_scratches} onChange={(e)=>setNo_scratches(e.target.value)}/>
          Number of Accidents<Input mb='2' placeholder='Enter Number of Accidents' type='nunber' value={no_accidents} onChange={(e)=>setNo_accidents(e.target.value)}/>
          Color of original paint <Input mb='2' placeholder='Enter Color' type='text' value={orig_paint} onChange={(e)=>setOrig_paint(e.target.value)}/>
          Number of Previous Buyers<Input mb='2' placeholder='Enter Number of buyers' type='nunber' value={prev_buyers} onChange={(e)=>setPrev_buyers(e.target.value)}/>
          Location of vehicle regisration <Input mb='2' placeholder='Enter Place' type='text' value={reg_place} onChange={(e)=>setReg_place(e.target.value)}/>
          URL of Car Image <Input mb='2' placeholder='Enter Car Image URL' type='text' value={img} onChange={(e)=>setImg(e.target.value)}/>

          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={HandleAddCar} colorScheme='blue' >SELL !!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      <Box>
        <Text fontSize={'30'} mt='5' mb='5' fontWeight={'semibold'} textAlign={'center'}>Buy & Sell Used Cars</Text>
        <Box>
        <Button onClick={onOpen} mr='10' bg={'blue.500'} color={'white'} _hover={{bg:'blue.600',color:"white"}}>Sell Your Car</Button>
        </Box>
        <Flex mt='5' mb='3' justifyContent={'space-evenly'}>
              <Box display={'flex'}>
              Sort based on Price:
              <Select>
                <option>Low to High</option>
                <option>High to Low</option>
              </Select>
              </Box>
<Box display={'flex'}>
Sort based on Mileage:
              <Select>
                <option>Low to High</option>
                <option>High to Low</option>
              </Select>
</Box>
<Box display={'flex'}>
Filter based on Color:
              <Select value={filterData} onChange={(e)=>setfilterData(e.target.value)}>
              <option value={''}>--Choose Car Color--</option>
                <option value={'red'}>Red</option>
                <option value={'white'}>White</option>
                <option value={'black'}>Black</option>
                <option value={'grey'}>Grey</option>
                <option value={'blue'}>Blue</option>
                <option value={'brown'}>Brown</option>
              </Select>
</Box>
        </Flex>
        <Grid gridTemplateColumns={"repeat(2,auto)"} mt='5' gap='5'>
          {Orig_data?.map((el,index)=>{
              return <SingleCar key={el._id} loggedID={userID} oemData={oemData} setRef={setRefresh} {...el} />
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default CarProducts