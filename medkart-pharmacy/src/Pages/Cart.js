import { Button, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartSizeContext } from "../Context/CartSizeContextProvider";
import "./Cart.css"
export default function Cart(){
    const [Data,SetData]=useState([]);
    const sumWithInitial=Data.reduce((previousValue,currentValue)=>previousValue+currentValue.sellingPrice,0);
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
    <div>{!CartSize ?
    <Flex justify={'center'} alignItems={'center'} flexDirection={'column'} gap={'50px'} marginTop={'50px'}>
        <Image src="https://d1s24u4ln0wd0i.cloudfront.net/app/assets/empty_cart_image.svg"/>
        <Text fontWeight={'500'}>Your Medicine/Healthcare cart is empty!</Text>
        <Button colorScheme={'green'}><Link to="/">Add Items</Link></Button>
    </Flex> :
        <div id="Checkout">
            <div id="Cart-Products">{
                Data?.map((Item)=>(
                    <div key={crypto.randomUUID()}>
                        <img className="Imagediv" src={Item.image} alt="Image"/>
                        <p>{Item.title}</p>
                        <p>{Item.sellingPrice}</p>
                        <button onClick={()=>RemoveCartItem(Item.id)} className="Remove">Remove</button>
                    </div>
                ))}
            </div>
            <div id="Checkout-Section">
                <div id="Price-Details">
                    <p>Price Details</p>
                    <div id="Price">
                        <p>Price (<span id="Quantity"></span> Items)</p>
                        <p>₹<span id="Total">{sumWithInitial}</span></p>
                    </div>
                    <div id="Delivery-Charges">
                        <p>Delivery Charges</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div id="Amount-Payable">
                        <p>Amount Payable</p>
                        <p>₹<span id="Total-Amount">{sumWithInitial}</span></p>
                    </div>
                </div>
                <button id="Checkout-Button">Checkout</button>
            </div>
        </div>}
    </div>
    )
}
