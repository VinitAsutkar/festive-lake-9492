import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function ProductCard({id,image,marked_price,selling_price,title}){
    const Navigate=useNavigate();
    return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' fontFamily={'sans-serif'} onClick={()=>Navigate(`/ayurvedic-care/${id}`)}>
        <Image boxSize={'50%'} margin={'auto'} objectFit={'contain'} src={image}/>
        <Box p='6'>
            <Box
            mt='1'
            mb='5'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            >
            {title}
            </Box>
            <Box>
            ₹{selling_price}
            <Box as='span' color='gray.600' textDecoration={'line-through'} ml='10px'>
            ₹{marked_price}
            </Box>
            </Box>
        </Box>
    </Box>
    )
}