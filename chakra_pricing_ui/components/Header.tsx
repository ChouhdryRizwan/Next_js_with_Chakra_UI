import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react"


export function Header() {
    return (
        <Box pb="112px" as="section">
            <Box color="#F7FAFC" bg="#6B46C1" pt="90px" pb="198px" px="32px">
                <Flex alignItems="center" justifyContent="center" direction="column">
                    <Heading fontWeight="800" fontSize="48">Simple pricing for your business</Heading>
                    <Text fontWeight="500" fontSize="24" pt="16px">Plans that are carefully crafted to suit your business.</Text>
                </Flex >
            </Box>
        </Box>
    )
}