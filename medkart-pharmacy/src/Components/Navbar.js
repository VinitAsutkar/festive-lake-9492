import { Box, Button, Collapse, Flex, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverContent, PopoverTrigger, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link as Redirect, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { CartSizeContext } from "../Context/CartSizeContextProvider";
import "./Navbar.css"
export default function Navbar(){
  const { isOpen, onToggle } = useDisclosure();
  const Navigate=useNavigate();
  const {isAuth,Logout}=useContext(AuthContext);
  const {CartSize}=useContext(CartSizeContext);
  return (
  <Box>
    <Flex 
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.600', 'white')}
    minH={'60px'}
    py={{ base: 2 }}
    px={{ base: 4 }}
    borderBottom={1}
    borderStyle={'solid'}
    borderColor={useColorModeValue('gray.200', 'gray.900')}
    align={'center'}>
      <Flex
      flex={{ base: 1, xl: 'auto' }}
      ml={{ base: -2 }}
      display={{ base: 'flex', xl: 'none' }}>
        <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>} variant={'ghost'} aria-label={'Toggle Navigation'}/>
      </Flex>
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Image onClick={()=>Navigate('/')} width={["100%","70%","50%","30%","10%"]} src="https://superblog.supercdn.cloud/site_cuid_cl92i00jg261301kozfglx818f/images/logo-mysitemkart-1667216952740.jpg"/>
        <Flex display={{ base: 'none', xl:'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
        <Flex onClick={()=>Navigate("/cart")}>
          <MdOutlineShoppingCart style={{fontSize:"25px",marginLeft:"20px"}}/><span id="Cart-Count">{CartSize}</span>
        </Flex>
      </Flex>{isAuth?<Flex align={'end'}><Menu><MenuButton><Text fontSize={{base:'sm',md:'md',lg:'lg',xl:'xl'}} fontWeight={'500'} marginLeft={'30px'}>{JSON.parse(localStorage.getItem("Profile"))}</Text></MenuButton><MenuList><MenuItem><Button onClick={()=>Logout()}>Logout</Button></MenuItem></MenuList></Menu></Flex>:
      <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
        <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}><Link as={Redirect} to='/login'>Sign In</Link></Button>
        <Button as={'a'} display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'} fontWeight={600} color={'white'} bg={'pink.400'} href={'#'} _hover={{bg:'pink.300'}}>Sign Up</Button>
      </Stack>}
    </Flex>
    <Collapse in={isOpen} animateOpacity>
      <MobileNav/>
    </Collapse>
  </Box>
  );
};
const DesktopNav=()=>{
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
  <Stack direction={'row'} spacing={4}>
    {NAV_ITEMS.map((navItem)=>(
    <Box key={navItem.label}>
      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Link
          p={2}
          href={navItem.href ?? '#'}
          fontSize={'sm'}
          fontWeight={500}
          color={linkColor}
          _hover={{textDecoration:'none',color: linkHoverColor}}>{navItem.label}
          </Link>
        </PopoverTrigger>
        {navItem.children && (
        <PopoverContent
        border={0}
        boxShadow={'xl'}
        bg={popoverContentBgColor}
        p={4}
        rounded={'xl'}
        minW={'sm'}>
          <Stack>
            {navItem.children.map((child)=>(<DesktopSubNav key={child.label} {...child}/>))}
          </Stack>
          </PopoverContent>)}
          </Popover>
    </Box>))}
  </Stack>
  );
}
const DesktopSubNav=({ label, href })=>{
  return (
  <Link
  href={href}
  role={'group'}
  display={'block'}
  p={2}
  rounded={'md'}
  _hover={{ bg: useColorModeValue('pink.50', 'gray.900')}}>
    <Stack direction={'row'} align={'center'}>
      <Box>
        <Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>{label}</Text>
      </Box>
      <Flex
      transition={'all .3s ease'}
      transform={'translateX(-10px)'}
      opacity={0}
      _groupHover={{ opacity: '100%', transform: 'translateX(0)'}}
      justify={'flex-end'}
      align={'center'}
      flex={1}>
        <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon}/>
      </Flex>
    </Stack>
  </Link>
  );
};
const MobileNav=()=>{
  return (
  <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ xl: 'none' }}>
    {NAV_ITEMS.map((navItem)=>(
    <MobileNavItem key={navItem.label} {...navItem}/>))}
  </Stack>
  );
};
const MobileNavItem=({ label, children, href })=>{
  const { isOpen, onToggle } = useDisclosure();
  return (
  <Stack spacing={4} onClick={children && onToggle}>
    <Flex
    py={2}
    as={Link}
    href={href ?? '#'}
    justify={'space-between'}
    align={'center'}
    _hover={{textDecoration: 'none'}}>
      <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>{label}</Text>
      {children && (<Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6}/>)}
    </Flex>
    <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
      <Stack
      mt={2}
      pl={4}
      borderLeft={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      align={'start'}>
        {children && children.map((child)=>(<Link key={child.label} py={2} href={child.href}>{child.label}</Link>))}
      </Stack>
    </Collapse>
  </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: 'Medicine',
    href: '#'
  },
  {
    label: 'Lab Tests',
    href: '#'
  },
  {
    label: 'Healthcare',
    children: [
      {
        label: 'Most Loved Brands',
        href: '#'
      },
      {
        label: 'Mega Clearance Sale',
        href: '#'
      },
      {
        label: 'Personal Care',
        href: '#'
      },
      {
        label: 'Healthcare Devices',
        href: '#'
      },
      {
        label: 'Health Food and Drinks',
        href: '#'
      },
      {
        label: 'Home Care',
        href: '#'
      },
      {
        label: 'Mother and Baby Care',
        href: '#'
      },
      {
        label: 'Diabetic Care',
        href: '#'
      },
      {
        label: 'Fitness Supplements',
        href: '#'
      },
      {
        label: 'Skin Care',
        href: '#'
      },
      {
        label: 'Sexual Wellness',
        href: '#'
      },
      {
        label: 'Accessories & Wearables',
        href: '#'
      },
      {
        label: 'Health Condition',
        href: '#'
      },
      {
        label: 'Ayurvedic Care',
        href: '#'
      },
      {
        label: 'Elderly Care',
        href: '#'
      },
      {
        label: 'Top Products',
        href: '#'
      }
    ]
  },
  {
    label: 'Surgeries',
    href: '#'
  },
  {
    label: 'Health Blogs',
    href: '#'
  },
  {
    label: 'PLUS',
    href: '#'
  },
  {
    label: 'Offers',
    href: '#'
  },
  {
    label: 'Value Store',
    href: '#'
  }
];