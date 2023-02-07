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
    Image, Divider, ButtonGroup, SimpleGrid, Stat, StatLabel, StatNumber
} from '@chakra-ui/react';


interface StatsCardProps {
    title: string;
    stat: string;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('red.500', 'red.100')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
            <Button rightIcon={<FaArrowRight />} colorScheme='red' variant='ghost' size='md' mt="5px">
                Learn More
            </Button>
        </Stat>

    );
}
export default function special() {
    return (
        <Container maxW={'12xl'} bg={useColorModeValue('gray.100', 'gray.700')}>
            <Stack
                textAlign={'center'}
                align={'center'}
                py={{ base: 6, md: 12 }}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}>
                    Specialized Tracks
                </Heading>
                <Text as="b" color={'red.500'} maxW={'3xl'}>
                    After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
                </Text>
                <Stack spacing={12} direction={'row'} maxW={'12xl'}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 7, lg: 10 }} mt="10px">
                        <StatsCard title={''} stat={'Web 3.0 (Blockchain) and Metaverse Specialization'} />
                        <StatsCard title={''} stat={'Artificial Intelligence (AI) and Deep Learning Specialization'} />
                        <StatsCard title={''} stat={'Cloud-Native Computing Specialization'} />
                    </SimpleGrid>
                </Stack>
                <Stack spacing={12} direction={'row'} maxW={'12xl'}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 7, lg: 10 }} mt="10px">
                        <StatsCard title={''} stat={'Ambient Computing and IoT Specialization'} />
                        <StatsCard title={''} stat={'Genomics and Bioinformatics Specialization'} />
                        <StatsCard title={''} stat={'Network Programmability and Automation Specialization'} />
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Container>
    );
}