import { Link } from '@chakra-ui/react'
import { Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    useColorModeValue, Collapse, Box,
} from '@chakra-ui/react';
import Details from './detail';


export default function desc() {
    return (
        <>
            <Container maxW={'12xl'} bg={useColorModeValue('gray.100', 'gray.700')}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    py={{ base: 6, md: 12 }}
                >
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}>
                        Quarter IV
                    </Heading>
                    <Text as="b" color={'red.500'} maxW={'4xl'}
                        fontSize={{ base: '1xl', sm: '1xl', md: '2xl' }}>
                        W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps.
                    </Text>
                    <Text as="b" fontSize={'14pt'}>
                        (Duration: 13 Weeks)
                    </Text>
                </Stack>
            </Container>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 4, md: 6 }}
                py={{ base: 6, md: 12 }}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
                    lineHeight={'110%'}>
                    Course <Text as={'span'} color={'red.500'}>  Description
                    </Text>
                </Heading>
                <Text color={useColorModeValue('gray.700', 'gray.400')} maxW={'3xl'} fontSize={'lg'}>
                    In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Link style={{ textDecoration: 'none' }} href='https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db' isExternal>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.400'}>
                            {/* _hover={{ bg: 'blue.500' }}> */}
                            View More
                        </Button>
                    </Link>
                </Stack>
            </Stack>
            <Details />
        </>
    );
}