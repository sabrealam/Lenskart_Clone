import React from 'react'
import { Grid, Image } from '@chakra-ui/react'
export default function GridImage() {
  let [data , setData] = React.useState([1,1,1,1,])
  return (
    <Grid w={"65%"} h={"100%"} templateColumns={"repeat(2,1fr)"} gap={"10px"}>
         {data.map(()=>{
           return <Image border={"1px solid gray"} borderRadius={"4px"} src={"https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7876_2a_28july23.jpg"}/>
         })}
        </Grid>
  )
}
