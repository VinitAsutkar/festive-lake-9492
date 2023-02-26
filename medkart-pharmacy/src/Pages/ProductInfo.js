import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { CartSizeContext } from '../Context/CartSizeContextProvider';
const InitialState={Data:[],isError:false,isLoading:false};
    const Reducer=(State,Action)=>{
    switch(Action.Type){
        case "Request": return {...State,isLoading:true,isError:false}
        case "Success": return {...State,Data:Action.Payload,isLoading:false,isError:false}
        case "Error": return {...State,isError:true}
        default: return State
    }
}
export default function ProductInfo({Endpoint}){
    const {CheckCartSize}=useContext(CartSizeContext);
    const [State,Dispatch]=useReducer(Reducer,InitialState);
    const {Data,isError,isLoading}=State;
    const {benefits,description,id,image,marked_price,selling_price,title}=Data;
    const {ID}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/${Endpoint}/${ID}`).then((Response)=>Dispatch({Type:"Success",Payload:Response.data})).catch(()=>Dispatch({Type:"Error"}))
    },[Endpoint,ID])
    const AddtoCart=(id,image,selling_price,title)=>{
        axios.post(`http://localhost:3000/cart`,{id,image,selling_price,title}).then(()=>CheckCartSize())
    }
    return (
    <Container maxW={'7xl'} fontFamily={'sans-serif'}>
        <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
            <Flex>
                <Image
                rounded={'md'}
                alt={'product image'}
                src={image}
                objectFit={'contain'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '500px' }}
                />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                            {title}
                        </Heading>
                        <Box mt={'5'} fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>₹{selling_price}<Box as='span' color='gray.600' textDecoration={'line-through'} ml='10px'>₹{marked_price}</Box></Box>
                    </Box>
                    <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={'column'}
                    divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')}/>}>
                    <Box>
                        <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={'green'}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                            Description
                        </Text>
                        <Container>{description}</Container>
                    </Box>
                    <Box>
                        <Text
                        fontSize={{ base: '16px', lg: '18px' }}
                        color={'green'}
                        fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                            Benefits
                        </Text>
                        <Container>{benefits}</Container>
                    </Box>
                    </Stack>
                <Button
                onClick={()=>AddtoCart(id,image,selling_price,title)}
                rounded={'none'}
                w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                colorScheme={'green'}
                textTransform={'uppercase'}
                _hover={{transform: 'translateY(2px)', boxShadow: 'lg'}}>
                    Add to cart
                </Button>
                <Stack direction="row" alignItems="center" justifyContent={'center'}>
                    <MdLocalShipping/>
                    <Text>2-3 business days delivery</Text>
                </Stack>
                </Stack>
        </SimpleGrid>
    </Container>
    );
}