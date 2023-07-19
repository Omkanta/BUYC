import { Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SingleCar = ({img,model_name,s_name,location,userID,loggedID,_id}) => {
  function HandleDelete(_id){
    fetch(`https://difficult-buckle-ray.cyclic.app/cars/delete/${_id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json",
        },
        
    }).then((res)=>res.json())
    .then((res)=>{console.log(res);})
    .catch(err=>{console.log(err); })
  }
  return (
    <div>
    <Image m={'auto'} w={'200px'} src={img}></Image>
    <Text>Car Model : {model_name}</Text>
      <Text>Seller : {s_name}</Text>
      <Text> Location : {location}</Text>
      {(userID==loggedID)?<>
      <Button>Edit</Button>
      <Button onClick={()=>{HandleDelete(_id)}} >Delete</Button>
      </>:<></>}
  </div>
  )
}

export default SingleCar