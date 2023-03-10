import { ReactNode } from 'react';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    useColorMode,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, MoonIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Course'];


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
            color: 'red.500'
        }}
        href={'https://panaverse-dao-chouhdryrizwan.vercel.app'}>
        {children}
    </Link>
);

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box boxSize='sm' h="10 0px" w="100px">
                            <Link style={{ textDecoration: 'none' }} href='http://localhost:3000'>
                                <Image src="/images/logo.png" alt="Title-Image" />
                            </Link>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            fontWeight="700"
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (

                                <NavLink
                                    key={link}>{link}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>

                            <Button onClick={toggleColorMode}>
                                <MoonIcon />
                            </Button>
                            {/* <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                               
                            </MenuButton> */}
                            {/* <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList> */}
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4} fontWeight="700">
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    );
}