import { useAnimation } from '@codechem/chakra-ui-animations';
// import { MdBuild, MdCall, ArrowForwardIcon } from "react-icons/md";
import { FaArrowRight } from 'react-icons/fa';

import {
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
    const animation = useAnimation('shake-y', { duration: 20000, iterationCount: 'infinite' });
    const textanimation = useAnimation('roll-in', { duration: 1000, iterationCount: 1 });
    const shadowanimation = useAnimation('jack-in-the-box', { duration: 1000, iterationCount: 1 });
    return (
        <Stack minH={'40vh'} direction={{ base: 'column', md: 'row' }} bgGradient='linear(to-r, #7928CA 70%, #FF0080)' >
            <Flex flex={8} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'} animation={textanimation}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="white">
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
                                // bg: 'white',
                                zIndex: -1,
                            }}>
                            Become a
                        </Text>
                        <br />{' '}
                        <Text color={'cyan.200'} as={'span'}>
                            Certified Web 3.0 and Metaverse Developer
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                        Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rightIcon={<FaArrowRight />}
                            rounded={'AiOutlineArrowRight'}
                            bgGradient='linear(to-l, #20badd, #FF0080)'
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-l, #FF0080,#20badd)'
                            }}>
                            For More Details
                        </Button>
                        {/* <Button rounded={'full'}>How It Works</Button> */}
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={8} align={'center'} justify={'center'} animation={animation}>
                <Image
                    w={'full'}
                    maxW={'lg'}
                    alt={'Man Image'}
                    objectFit={'cover'}
                    src={
                        '/images/main-image.png'
                    }
                />
            </Flex>
        </Stack>
    );
}