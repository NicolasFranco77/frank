import React from 'react'
import ProductAddToCart from "./Card"

import {  SimpleGrid  } from '@chakra-ui/react'


const ProductsList = () => {
  return (

 <SimpleGrid  p={10} columns={4} spacing={2} minChildWidth='300px'justifyItems={"center"}  >
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>
    <ProductAddToCart/>

 </SimpleGrid>
    
    
 
  )
}

export default ProductsList