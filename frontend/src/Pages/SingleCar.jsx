import { Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

const SingleCar = ({img,model_name,reg_place,model_year,userID,loggedID,_id,setRef,odometer,no_scratches,
  no_accidents,orig_paint,prev_buyers,oemData}) => {
  const toast = useToast()
  const [temp_odometer,setodometer]=useState(odometer);
  const [temp_no_scratches,setNo_scratches]=useState(no_scratches);
  const [temp_no_accidents,setNo_accidents]=useState(no_accidents);
  const [temp_orig_paint,setOrig_paint]=useState(orig_paint);
  const [temp_prev_buyers,setPrev_buyers]=useState(prev_buyers);
  const [temp_reg_place,setReg_place]=useState(reg_place);
  const [temp_model_name,setModelName]=useState(model_name);
  const [temp_model_year,setModelYear]=useState(model_year);
  const [temp_img,setImg]=useState(img);
  const { isOpen, onOpen, onClose } = useDisclosure()

  function HandleDelete(_id){
    fetch(`http://localhost:8080/cars/delete/${_id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
        },
        
    }).then((res)=>res.json())
    .then((res)=>{console.log(res);
      setRef((prev)=>!prev)
      toast({
        positions:"top",
        title: 'Delete Successfull !!.',
        description: "Thw item  has been deleted successfully.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })    
    })
    .catch(err=>{console.log(err); })
  }

  function HandleEdit(){
let obj={};
obj["model_name"]=temp_model_name;
obj["model_year"]=+temp_model_year;
obj["odometer"]=+temp_odometer;
obj["no_scratches"]=+temp_no_scratches;
obj["no_accidents"]=+temp_no_accidents;
obj["orig_paint"]=temp_orig_paint;
obj["prev_buyers"]=+temp_prev_buyers;
obj["reg_place"]=temp_reg_place;
obj["img"]=temp_img;
console.log(obj);

fetch(`http://localhost:8080/cars/edit/${_id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(obj)
    }).then((res)=>res.json())
    .then((res)=>{console.log(res);
      setRef((prev)=>!prev);
      toast({
        positions:"top",
        title: 'Update Successfull !!.',
        description: "Thw item details has been updated successfully.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose()
    })
    .catch(err=>{console.log(err); })
  }

  return (
    <div >
    <Image m={'auto'} w={'350px'} src={temp_img}></Image>
    <Text fontWeight={'semibold'}>Car Model : {temp_model_name}</Text>
    <Text> Car Model year : {temp_model_year}</Text>
      <Text>Registration Place : {temp_reg_place}</Text>
      
      {(userID==loggedID)?<>
      <Button onClick={()=>onOpen()}>Edit</Button>
      <Button onClick={()=>{HandleDelete(_id)}} >Delete</Button>
      </>:<><Button onClick={()=>{ toast({
          positions:"top",
          title: 'Sorry.',
          description: "This feature has not been implemented yet.",
          status: 'warning',
          duration: 3000,
          isClosable: true,
        })}}>Contact Seller</Button></>}

              <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your car Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Select Your Car Model <Select mb='2' value={temp_model_name} onChange={(e)=>setModelName(e.target.value)}>
             <option value=''>--Select Car Model--</option>
              {oemData?.map((el)=>{
                return <option key={el._id} value={el.model_name}>{el.model_name}</option>
              })}
            </Select>
            Select Model Year of Your Car<Select mb='2' value={temp_model_year} onChange={(e)=>setModelYear(e.target.value)}>
            <option value=''>--Select Year Model of Car--</option>
              {oemData?.map((el,index)=>{
                return <option key={el._id} value={index+2010}>{index+2010}</option>
              })}
            </Select>
          KMs on Oodometer <Input mb='2' placeholder='Enter KMs' type='nunber' value={temp_odometer} onChange={(e)=>setodometer(e.target.value)}/>
          Number of Scratches <Input mb='2' placeholder='Enter Number of Scratches' type='nunber' value={temp_no_scratches} onChange={(e)=>setNo_scratches(e.target.value)}/>
          Number of Accidents<Input mb='2' placeholder='Enter Number of Accidents' type='nunber' value={temp_no_accidents} onChange={(e)=>setNo_accidents(e.target.value)}/>
          Color of original paint <Input mb='2' placeholder='Enter Color' type='text' value={temp_orig_paint} onChange={(e)=>setOrig_paint(e.target.value)}/>
          Number of Previous Buyers<Input mb='2' placeholder='Enter Number of buyers' type='nunber' value={temp_prev_buyers} onChange={(e)=>setPrev_buyers(e.target.value)}/>
          Location of vehicle regisration <Input mb='2' placeholder='Enter Place' type='text' value={temp_reg_place} onChange={(e)=>setReg_place(e.target.value)}/>
          URL of Car Image <Input mb='2' placeholder='Enter Car Image URL' type='text' value={temp_img} onChange={(e)=>setImg(e.target.value)}/>

          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={HandleEdit} colorScheme='blue' >Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </div>
  )
}

export default SingleCar