import { Image, Text } from '@chakra-ui/react'
import React from 'react'

const SingleCar = ({img,model_name,s_name,location}) => {
  return (
    <div>
    <Image m={'auto'} w={'200px'} src={img}></Image>
    <Text>Car Model : {model_name}</Text>
      <Text>Seller : {s_name}</Text>
      <Text> Location : {location}</Text>

  </div>
  )
}

export default SingleCar