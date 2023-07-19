import { Box, Button, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingleCar from './SingleCar'
import { useSelector } from 'react-redux'

const CarProducts = () => {
  // const [Orig_data,setOrigData]=useState([]);
  const [odometer,setodometer]=useState('');
  const [no_scratches,setNo_scratches]=useState('');
  const [no_accidents,setNo_accidents]=useState('');
  const [orig_paint,setOrig_paint]=useState('');
  const [prev_buyers,setPrev_buyers]=useState('');
  const [reg_place,setReg_place]=useState('');
  const [model_name,setModelName]=useState('');
  const [model_year,setModelYear]=useState('');

  let {userID}=useSelector((store)=>{return store.reducer});
    const { isOpen, onOpen, onClose } = useDisclosure()

  // console.log(userID);

  const HandleAddCar=()=>{
let obj={
  "odometer":+odometer,
  "no_scratches":+no_scratches,
  "no_accidents":+no_accidents,
  "no_accidents":+no_accidents,
  orig_paint,
  'prev_buyers':+prev_buyers,
  reg_place,
  model_name,
  "model_year":+model_year,
  userID
}
console.log(obj);
  }
  let Orig_data=[
    {
      "model_name": "Hyundai Venue SX Opt Turbo BSIV",
      "mileage": 18.2,
      "Price": 9.8,
      "model_year": 2020,
      "power": 129.2,
      "max_speed": 240
    },
    {
      "model_name": "Ford Ecosport 1.5 Petrol Titanium BSIV",
      "mileage": 17,
      "Price": 6.79,
      "model_year": 2017,
      "power": 142.2,
      "max_speed": 200
    },
    {
      "model_name": "Maruti Swift Dzire VXI",
      "mileage": 16.8,
      "Price": 3.51,
      "model_year": 2016,
      "power": 156.3,
      "max_speed": 170
    },
    {
      "model_name": "Jaguar XF 2.2 Litre Luxury",
      "mileage": 19.4,
      "Price": 9.78,
      "model_year": 2013,
      "power": 169.8,
      "max_speed": 200
    },
    {
      "model_name": "Mercedes-Benz GLS 400d 4MATIC",
      "mileage": 20.4,
      "Price": 120,
      "model_year": 2020,
      "power": 190,
      "max_speed": 230
    },
    {
      "model_name": "Mitsubishi Pajero Sport 4X4",
      "mileage": 17.6,
      "Price": 8.45,
      "model_year": 2014,
      "power": 117.8,
      "max_speed": 180
    },
    {
      "model_name": "MG Hector Plus Sharp DCT",
      "mileage": 15.2,
      "Price": 18.25,
      "model_year": 2020,
      "power": 160.4,
      "max_speed": 160
    },
    {
      "model_name": "Honda City 1.5 S AT",
      "mileage": 16.4,
      "Price": 3.95,
      "model_year": 2012,
      "power": 130.7,
      "max_speed": 180
    },
    {
      "model_name": "Audi A4 1.8 TFSI Premium Plus",
      "mileage": 19.2,
      "Price": 8.5,
      "model_year": 2014,
      "power": 194,
      "max_speed": 220
    },
    {
      "model_name": "Mahindra XUV500 W6 2WD",
      "mileage": 14.7,
      "Price": 5.5,
      "model_year": 2015,
      "power": 153,
      "max_speed": 140
    },
    {
      "model_name": "Skoda Octavia Zeal Elegance 2.0 TDI AT",
      "mileage": 13.8,
      "Price": 9.7,
      "model_year": 2015,
      "power": 163,
      "max_speed": 180
    },
    {
      "model_name": "Tata New Safari XZ Plus Gold",
      "mileage": 15.5,
      "Price": 21,
      "model_year": 2021,
      "power": 162.4,
      "max_speed": 150
    },
    {
      "model_name": "Renault KWID RXL",
      "mileage": 16.1,
      "Price": 3.44,
      "model_year": 2019,
      "power": 138,
      "max_speed": 190
    },
    {
      "model_name": "BMW X1 sDrive20i SportX",
      "mileage": 19.6,
      "Price": 40.7,
      "model_year": 2020,
      "power": 182.4,
      "max_speed": 260
    }
  ]
  let dat=[{
    img:"https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/64b699ab11b23.jpg",
    s_name:"Omkant",
    model_name:"Hundai",
    location:"Delhi"
  },{
    img:"https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/64b699ab11b23.jpg",
    s_name:"Omkant",
    model_name:"Hundai",
    location:"Delhi"
  },{
    img:"https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/64b699ab11b23.jpg",
    s_name:"Omkant",
    model_name:"Hundai",
    location:"Delhi"
  }]

  useEffect(()=>{

  },[])
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
              {Orig_data.map((el)=>{
                return <option value={el.model_name}>{el.model_name}</option>
              })}
            </Select>
            Select Model Year of Your Car<Select mb='2' value={model_year} onChange={(e)=>setModelYear(e.target.value)}>
            <option value=''>--Select Year Model of Car--</option>
              {Orig_data.map((el,index)=>{
                return <option value={index+2010}>{index+2010}</option>
              })}
            </Select>
          KMs on Oodometer <Input mb='2' placeholder='Enter KMs' type='nunber' value={odometer} onChange={(e)=>setodometer(e.target.value)}/>
          Number of Scratches <Input mb='2' placeholder='Enter Number of Scratches' type='nunber' value={no_scratches} onChange={(e)=>setNo_scratches(e.target.value)}/>
          Number of Accidents<Input mb='2' placeholder='Enter Number of Accidents' type='nunber' value={no_accidents} onChange={(e)=>setNo_accidents(e.target.value)}/>
          Color of original paint <Input mb='2' placeholder='Enter Color' type='text' value={orig_paint} onChange={(e)=>setOrig_paint(e.target.value)}/>
          Number of Previous Buyers<Input mb='2' placeholder='Enter Number of buyers' type='nunber' value={prev_buyers} onChange={(e)=>setPrev_buyers(e.target.value)}/>
          Location of vehicle regisration <Input mb='2' placeholder='Enter Place' type='text' value={reg_place} onChange={(e)=>setReg_place(e.target.value)}/>

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
        <Grid gridTemplateColumns={"repeat(3,auto)"}>
          {dat.map((el,index)=>{
              return <SingleCar key={index} {...el} />
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default CarProducts