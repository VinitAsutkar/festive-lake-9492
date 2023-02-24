import { Box, Container, Grid, Image, Link, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const ListHeader=({ children })=>{
    return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>{children}</Text>
    );
};
export default function Footer(){
    return (
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={'flex-start'}>
                    <ListHeader>Company</ListHeader>
                    <Link style={{textDecoration:'none'}} href={'#'}>About Us</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Careers</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Blog</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Partner with MedKart</Link>
                    <Link style={{textDecoration:'none',marginBottom:"20px"}} href={'#'}>Sell at MedKart</Link>
                    <ListHeader>Our Services</ListHeader>
                    <Link style={{textDecoration:'none'}} href={"#"}>Order Medicine</Link>
                    <Link style={{textDecoration:'none'}} href={"#"}>Healthcare Products</Link>
                    <Link style={{textDecoration:'none'}} href={"#"}>Lab Tests</Link>
                    <Link style={{textDecoration:'none'}} href={"#"}>Find Nearest Collection Centre</Link>
                    <Link style={{textDecoration:'none'}} href={"#"}>Surgeries</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>Featured Categories</ListHeader>
                    <Link style={{textDecoration:'none'}} href={'#'}>Most Loved Brands</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Mega Clearance Sale</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Personal Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Healthcare Devices</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Health Food and Drinks</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Home Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Mother and Baby Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Diabetic Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Fitness Supplements</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Skin Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Sexual Wellness</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Accessories & Wearables</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Health Condition</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Ayurvedic Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Elderly Care</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Top Products</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>Need Help</ListHeader>
                    <Link style={{textDecoration:'none'}} href={'#'}>Browse All Medicines</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Browse All Molecules</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Browse All Cities</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Browse All Areas</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>Browse All Stores</Link>
                    <Link style={{textDecoration:'none'}} href={'#'}>FAQs</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>Follow us on</ListHeader>
                    <Grid templateColumns={'repeat(4,1fr)'} gap={{base:'15px',lg:'30px'}}>
                    <Link style={{textDecoration:'none'}} href={'#'}><BsInstagram fontSize={'30px'}/></Link>
                    <Link style={{textDecoration:'none'}} href={'#'}><BsFacebook fontSize={'30px'}/></Link>
                    <Link style={{textDecoration:'none'}} href={'#'}><BsYoutube fontSize={'30px'}/></Link>
                    <Link style={{textDecoration:'none'}} href={'#'}><BsTwitter fontSize={'30px'}/></Link>
                    </Grid>
                </Stack>
            </SimpleGrid>
        </Container>
        <Container maxW={'6xl'}><Text style={{fontWeight:'500',textAlign:'left'}} fontSize={'lg'}>Our Payment Partners</Text></Container>
        <Container maxW={'6xl'} mt={'20px'}>
            <SimpleGrid minChildWidth={'50px'} alignItems={'center'} spacing={'20px'}>
                <Image width={'50%'} src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"/>
                <Image width={'50%'} src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"/>
                <Image width={'30%'} src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"/>
                <Image width={'40%'} src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"/>
                <Image width={'40%'} src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"/>
                <Image width={'30%'} src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"/>
                <Image width={'30%'} src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"/>
                <Image width={'30%'} src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0"/>
                <Image width={'40%'} src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"/>
                <Image width={'60%'} src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"/>
            </SimpleGrid>
            <Box py={10}><Text pt={6} fontSize={'sm'} textAlign={'center'}>© 2023 MedKart Pharmacy. All rights reserved</Text></Box>
        </Container>
    </Box>
    );
}