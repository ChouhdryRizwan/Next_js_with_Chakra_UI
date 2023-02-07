import { FaArrowRight } from 'react-icons/fa';
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    useColorModeValue,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Box, Card, CardHeader, CardBody, CardFooter,
    Image, Divider, ButtonGroup, SimpleGrid, Center, Grid, GridItem, Link
} from '@chakra-ui/react';

export default function courses() {
    return (
        <Container maxW={'12xl'} minH={'100vh'} bg={useColorModeValue('white', 'black')} mb={{ base: '200px', md: '0px' }}>
            <Stack
                textAlign={'center'}
                align={'center'}
                py={{ base: 0, md: 12 }}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}>
                    <Text as="span" color="red.500">Programs</Text> We Offered
                </Heading>
            </Stack>
            <Grid templateColumns='repeat(3, 1fr)' gap={10}>
                <GridItem w='100%'>
                    <Card bg={useColorModeValue('gray.100', 'gray.700')} align={'center'} boxShadow={'md'}>
                        <CardHeader>
                            <Heading size='lg' fontWeight="600">Metaverse</Heading>
                        </CardHeader>
                        <CardBody my="-15px">
                            <Text>This Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet.</Text>
                        </CardBody>
                        <CardFooter>
                            <Link style={{ textDecoration: 'none' }} href='./metaverse'>
                                <Button colorScheme={'red'}><FaArrowRight /></Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%' h='10'  >
                    <Card bg={useColorModeValue('gray.100', 'gray.700')} align={'center'} boxShadow={'md'}>
                        <CardHeader>
                            <Heading size='lg' fontWeight="600">Web 3.0</Heading>
                        </CardHeader>
                        <CardBody my="-15px">
                            <Text>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme={'red'}><FaArrowRight /></Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%' h='10'  >
                    <Card bg={useColorModeValue('gray.100', 'gray.700')} align={'center'} boxShadow={'md'}>
                        <CardHeader>
                            <Heading size='lg' fontWeight="600">Blockchain</Heading>
                        </CardHeader>
                        <CardBody my="-15px">
                            <Text>In this program we focuses on developing the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme={'red'}><FaArrowRight /></Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </Grid>
            <Grid templateColumns='repeat(2, 1fr)' gap={10} mt="30px">
                <GridItem w='100%' h='10' >
                    <Card bg={useColorModeValue('gray.100', 'gray.700')} align={'center'} boxShadow={'md'}>
                        <CardHeader>
                            <Heading size='lg' fontWeight="600">Artificial Intelligence (AI)</Heading>
                        </CardHeader>
                        <CardBody my="-15px">
                            <Text>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow model.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme={'red'}><FaArrowRight /></Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w='100%' h='10'  > <Card bg={useColorModeValue('gray.100', 'gray.700')} align={'center'} boxShadow={'md'}>
                    <CardHeader>
                        <Heading size='lg' fontWeight="600">Cloud-Native Computing</Heading>
                    </CardHeader>
                    <CardBody my="-15px">
                        <Text>Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme={'red'}><FaArrowRight /></Button>
                    </CardFooter>
                </Card>
                </GridItem>
            </Grid>
        </Container>
    );
}