import React from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Grid, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { useSelector } from 'react-redux'
export default function WishList( { isOpen, onOpen, onClose} ) {
    const [placement, setPlacement] = React.useState('left')
    let state = useSelector(state => state.render)
    let [data, setData] = React.useState([1,2,3,4,5])

    React.useEffect(()=>{
        setData([1,2,3,4,5])
    },[])
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        
      </RadioGroup>
 
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Wishlist</DrawerHeader>
          <DrawerBody>
            <Grid templateColumns={"repeat(5,1fr)"} gap={"5px"}>
                {data.map((data, item)=>{
                    return(
                        <Box key={item} w={"100px"} h={"100px"} border={"1px solid black"} >fav</Box>
                    )
                })}
            </Grid>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
