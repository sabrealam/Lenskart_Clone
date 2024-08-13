import React from 'react'
import { Grid, Image } from '@chakra-ui/react'
export default function GridImage(props) {
  let [data , setData] = React.useState([1,1,1,1,])
  return (
    <Grid w={"65%"} h={"100%"} templateColumns={"repeat(2,1fr)"} gap={"10px"}>
         {data.map((item, idx)=>{
           return <Image key={idx} transform={"rotateY(10deg)"}  border={"1px solid gray"} borderRadius={"4px"} src={props.image_url}/>
         })}
        </Grid>
  )
}
