import { useAnimation } from '@codechem/chakra-ui-animations';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue, Image
} from '@chakra-ui/react';

export default function MetaverseTitle() {
    const animation = useAnimation('shake-y', { duration: 20000, iterationCount: 'infinite' });
    return (
        <>
            <Flex
                w={'full'}
                h={'60vh'}
                backgroundImage={'./images/metaverse.jpg'}
                // animation={animation}
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    align={'left'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, red.500, transparent)'}>
                    <Stack maxW={'2xl'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={600}
                            lineHeight={1.1}
                            fontSize={useBreakpointValue({ base: '6xl', md: '7xl' })}>
                            Web 3 and Metaverse Specialization
                        </Text>
                    </Stack>
                </VStack>
            </Flex>
        </>
    );
}