import { Link } from '@chakra-ui/react'
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
} from '@chakra-ui/react';

export default function calltoaction() {
  return (
    <Container maxW={'12xl'} bg={useColorModeValue('gray.100', 'gray.700')}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 6, md: 12 }}>
        <Heading
          fontWeight={700}
          fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
          lineHeight={'110%'}>
          The Program in a Nutshell <br />{' '}
          <Text as={'span'} color={'red.400'}>
            Earn While You Learn
          </Text>
        </Heading>
        <Text color={useColorModeValue('gray.700', 'gray.400')} maxW={'3xl'} fontSize={'lg'}>
          In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Link style={{ textDecoration: 'none' }} href='https://www.piaic.org/' isExternal>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}>
              {/* _hover={{ bg: 'blue.500' }}> */}
              Enroll Now
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}