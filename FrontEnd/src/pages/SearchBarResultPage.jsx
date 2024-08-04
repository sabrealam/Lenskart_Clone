import { Box, Grid, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HelpLine from '../miscellaneous/HelpLine'
import Image from '../miscellaneous/Image'
import Filter from '../components/Filter'
import SortingBar from '../components/SortingBar'
import ItemBox from '../components/ItemBox'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import fetchData from '../CustomHookAndFunction/fetchData'
import { GET_DATA } from '../redux/actionTypes'
import AllRoute from '../AllRoute'

export default function SearchBarResultPage() {
    let {searchKey} = useParams();
    let key = searchKey.split(" ")[0]
    let url = import.meta.env.VITE_BASE_URL;
    const state = useSelector(state => state.render)
    const dispatch = useDispatch();
    console.log(key)
  React.useEffect(() => {
    fetchData(`${url}/search/${key}`, dispatch, GET_DATA);
  }, [key]);
//  console.log(state, "from search bar result page");
  return (
    <Box>
        
        <Navbar/>
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
            { state == undefined  ? <Heading>Data Not Found</Heading> : <Grid w={"100%"} p={"30px"} gridTemplateColumns={"repeat(3,1fr)"}   gap={"10px"}>
              {state && state.map((item) => {
                return (
                  <ItemBox key={item.id} {...item} />
                );
              })
              
              }
            </Grid>}
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
