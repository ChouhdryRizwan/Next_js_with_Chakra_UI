import React from "react";
import { Box, Flex, Text, Heading, Button, HStack, Icon, StackProps, Stack } from "@chakra-ui/react";
import { checkIcon } from "./icons/icon";


export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as="li" spacing="20px" {...rest}>
            <Icon as={checkIcon} w="22px" h="22px" />
            <Text>{children}</Text>
        </HStack>
    )
}

export function Pricing() {
    return (
        <Box maxW="994px" margin="auto" mt="-256px" borderRadius="12px" overflow="hidden" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)">
            <Flex>
                <Box bg="#F0EAFB" p="60px" alignItems="center" justifyContent="center">
                    <Text textAlign="center" fontSize="24px" fontWeight="800">Premium PRO</Text>
                    <Heading textAlign="center" as="h3" fontSize="60px" mt="16px">$329</Heading>
                    <Text textAlign="center" color="#171923" fontSize="18px" fontWeight="500" mt="8px">billed just once</Text>
                    <Button colorScheme="purple" size="lg" w="282px" mt="24px">Get Started</Button>
                </Box>
                <Box p="60px" fontSize="18px" bg="white">
                    <Text textAlign="left">
                        Access these features when you get this pricing package for your business.
                    </Text>

                    <Stack as="ul" spacing="20px" pt="20px">
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}