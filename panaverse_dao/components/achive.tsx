import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Link,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function achive() {
    return (
        <Stack minH={'20vh'} direction={{ base: 'column', md: 'row' }} py={12} px={100}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.200',
                                zIndex: -1,
                            }}>
                            Outcome
                        </Text>
                        <br />{' '}
                        <Text color={'red.500'} as={'span'}>
                            for Participants of the Program
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Link style={{ textDecoration: 'none' }} href='https://www.piaic.org/' isExternal>
                            <Button
                                rounded={'full'}
                                color={'white'}
                                colorScheme="red">
                                Enroll Now
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Graduate Images'}
                    objectFit={'contain'}
                    src={
                        'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}