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
    Image, Divider, ButtonGroup, Link
} from '@chakra-ui/react';

export default function corecourses() {
    return (
        <Container maxW={'12xl'} bg={useColorModeValue('white', 'black')} pt={{
            base: 50, md: 0
        }}>
            <Stack
                textAlign={'center'}
                align={'center'}
                py={{ base: 6, md: 12 }}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}>
                    Core Courses
                </Heading>
                <Text as="b" color={'red.500'} maxW={'3xl'}>
                    Every participant of the program will start by completing the following two core courses:
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <Tabs isFitted variant='enclosed' mt="15px">
                        <TabList mb='1em'>
                            <Tab>Quarter I</Tab>
                            <Tab>Quarter II</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                    boxShadow='md'
                                >
                                    <Stack>
                                        <CardBody>
                                            <Heading size='md' maxW={'4xl'}>CS-101: Object-Oriented Programming using TypeScript</Heading>
                                            <Text as="b" fontSize={'lg'} color="red.500">(Duration: 13 Weeks)</Text>

                                            <Text pt='2' maxW={'4xl'}>
                                                We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
                                            </Text>
                                        </CardBody>
                                        <CardFooter justify={'center'}>
                                            <Link style={{ textDecoration: 'none' }} href='./quarter1'>
                                                <Button rightIcon={<FaArrowRight />} colorScheme='red' mt="-30px" bg={'red.400'}>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </TabPanel>
                            <TabPanel>
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                    boxShadow='md'
                                >
                                    <Stack>
                                        <CardBody>
                                            <Heading size='md' maxW={'4xl'}>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
                                            <Text as="b" fontSize={'lg'} color="red.500">(Duration: 13 Weeks)</Text>

                                            <Text pt='2' maxW={'4xl'}>
                                                The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc.
                                            </Text>
                                        </CardBody>
                                        <CardFooter justify={'center'}>
                                            <Button rightIcon={<FaArrowRight />} colorScheme='red' mt="-30px" bg={'red.400'}>
                                                Read More
                                            </Button>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Stack>
        </Container >
    );
}