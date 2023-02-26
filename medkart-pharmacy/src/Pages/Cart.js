import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartSizeContext } from "../Context/CartSizeContextProvider";
import "./Cart.css"
export default function Cart(){
    const [Data,SetData]=useState([]);
    const sumWithInitial=Data.reduce((Accumulator,currentValue)=>Accumulator+currentValue.selling_price,0);
    const GetCartData=()=>{
        axios.get(`http://localhost:3000/cart`).then((Response)=>SetData(Response.data))
    }
    useEffect(()=>{
        GetCartData()
    },[])
    const RemoveCartItem=(id)=>{
        axios.delete(`http://localhost:3000/cart/${id}`).then(()=>CheckCartSize()).then(()=>GetCartData())
    }
    const {CartSize,CheckCartSize}=useContext(CartSizeContext);
    return (
    <div>
        {!CartSize ?
        <Flex justify={'center'} alignItems={'center'} flexDirection={'column'} gap={'50px'} marginTop={'50px'}>
            <Image src="https://d1s24u4ln0wd0i.cloudfront.net/app/assets/empty_cart_image.svg"/>
            <Text fontWeight={'500'}>Your Medicine/Healthcare cart is empty!</Text>
            <Button colorScheme={'green'}><Link to="/">Add Items</Link></Button>
        </Flex> :
        <Flex justify={'space-around'} gap={5} mt={'50px'} fontFamily={'sans-serif'} direction={{base:'column',md:'row'}}>
            <Grid flex={6} border={'1px solid silver'} gap={10} p={5}>
                {
                Data.map((Item)=>
                <GridItem margin={'auto'} w={'100%'} p={5} border={'1px solid silver'}>
                    <Image boxSize={'20%'} margin={'auto'} objectFit={'contain'} src={Item.image}/>
                    <Text fontWeight={'semibold'} pt={5}>{Item.title}</Text>
                    <Text p={10}>₹{Item.selling_price}</Text>
                    <Button colorScheme={'green'} onClick={()=>RemoveCartItem(Item.id)} w={'100%'}>Remove</Button>
                </GridItem>
                )
                }
            </Grid>
                <Box flex={3} border={'1px solid silver'} p={5}>
                    <Text textAlign={'left'} pb={5} textTransform={'uppercase'} fontWeight={'semibold'}>Price Details</Text>
                    <Flex justify={'space-between'} pb={5}>
                        <Text>Price ({Data.length} Items)</Text>
                        <Text>₹{sumWithInitial}</Text>
                    </Flex>
                    <Flex justify={'space-between'} pb={10}>
                        <Text>Delivery Charges</Text>
                        <Text textTransform={'uppercase'} color={'green'}>Free</Text>
                    </Flex>
                    <Flex justify={'space-between'} pb={10}>
                        <Text fontWeight={'semibold'} textTransform={'uppercase'}>Amount Payable</Text>
                        <Text color={'blue'}>₹{sumWithInitial}</Text>
                    </Flex>
                    <Button w={'100%'} colorScheme={'red'}>Checkout</Button>
                </Box>
        </Flex>
        }
    </div>
    )
}
