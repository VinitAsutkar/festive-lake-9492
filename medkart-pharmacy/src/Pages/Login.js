import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const {Login}=useContext(AuthContext);
    const [LoginEmail,SetLoginEmail]=useState("");
    const [LoginPassword,SetLoginPassword]=useState("");
    const Navigate=useNavigate();
    const GetUserInfo=()=>{
        axios.get(`https://636df0bbb567eed48acd7f24.mockapi.io/userdata`).then((Response)=>MatchCredentials(Response.data))
    }
    const MatchCredentials=(Data)=>{
        let Form={Email:LoginEmail,Password:LoginPassword}
    if(Form.Email==""||Form.Password==""){
        alert(`Please enter your credentials`)
    }
    else{
        let Flag=false;
        Data.forEach((element)=>{
            if(element.Email==Form.Email&&element.Password==Form.Password){
                Flag=true;
                localStorage.setItem("Profile",JSON.stringify(element.Name))
            }
        })
        if(Flag){
            Login()
            Navigate("/")
        }
        else{
            alert(`Please enter correct credentials`)
        }
    }
    }
    return (
    <Flex
    minH={'100vh'}
    align={'center'}
    ustify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️</Text>
            </Stack>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" onChange={(Event)=>SetLoginEmail(Event.target.value)}/>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" onChange={(Event)=>SetLoginPassword(Event.target.value)}/>
                    </FormControl>
                    <Stack spacing={10}>
                        <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack><Button bg={'blue.400'} color={'white'} _hover={{bg: 'blue.500',}} onClick={()=>GetUserInfo()}>Sign in</Button></Stack>
                </Stack>
            </Box>
        </Stack>
    </Flex>
    );
}