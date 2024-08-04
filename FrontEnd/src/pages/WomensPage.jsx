import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../CustomHookAndFunction/fetchData';
import { GET_DATA, GET_DATA_WOMENS } from '../redux/actionTypes';
import ItemBox from '../components/ItemBox';
import { Box, Grid, HStack } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import HelpLine from '../miscellaneous/HelpLine';
import Image from '../miscellaneous/Image';
import Filter from '../components/Filter';
import SortingBar from '../components/SortingBar';
import Footer from '../components/Footer';

export default function WomensPage() {
  const url = import.meta.env.VITE_BASE_URL
  const state = useSelector((state) => state.render);
  const dispatch = useDispatch();



  React.useEffect(() => {
    fetchData(`${url}/products/v2/womens`, dispatch, GET_DATA)
  }, [])
   console.log(state, "from womens page");
  return (
    <Box> 
    <Navbar />
    <Box p={"30px"}>  
      <HelpLine />
      <Image 
        h={"145px"}   
        src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
      />
      <HStack w={"100%"} h={"600px"} >
        <Box w={"15%"} h={"500px"} >
          <Filter />
        </Box>
        <Box w={"80%"} h={"500px"} overflowX={"scroll"} className="scroll" >
          <SortingBar />
          <Grid w={"100%"} p={"30px"} gridTemplateColumns={"repeat(3,1fr)"}   gap={"10px"}>
            {state && state.map((item) => {
              return (
                <ItemBox key={item.id} {...item} />
              );
            })}
          </Grid>
          {/* <HStack w={"100%"} p={"30px"} flexWrap={"wrap"} gap={"10px"}>
            {state && state.map((item) => {
              return (
                <ItemBox key={item.id} {...item} />
              );
            })}
          </HStack> */}
        </Box>
      </HStack>
    </Box>
    <Footer/>
  </Box>
  )
}
