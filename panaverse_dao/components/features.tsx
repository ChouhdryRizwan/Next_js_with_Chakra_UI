import { useAnimation } from '@codechem/chakra-ui-animations';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const textanimation = useAnimation('roll-in', { duration: 1000, iterationCount: 1 });
  return (
    <Container maxW={'12xl'} py={12} px={100}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} animation={textanimation}>
          <Text
            textTransform={'uppercase'}
            color={'red.500'}
            fontWeight={600}
            fontSize={'lg'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Who we are
          </Text>
          <Heading>Panaverse DAO</Heading>
          <Text color="red.500" fontWeight="700" fontSize={'lg'}>(Decentralized Autonomous Organization)</Text>
          <Text color={'gray.500'} fontSize={'lg'}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. <Text as={'span'} fontWeight="600" color={useColorModeValue('black', 'white')}>Panaverse DAO</Text>  is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
          </Text>
        </Stack>
        <Flex align={'right'} justify={'right'}>
          <Box boxSize='lg' h={"auto"} w="450px">
            <Image
              rounded={'md'}
              w={'full'}

              alt={'feature image'}
              src={
                './images/logo.png'
              }
              objectFit={'contain'}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}