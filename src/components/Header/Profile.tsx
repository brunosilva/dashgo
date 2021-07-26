// libs
import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Bruno Silva</Text>
                <Text color="gray.300" fontSize="small">
                    brs.rsilva@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Bruno Silva" src="https://github.com/brunosilva.png" />
        </Flex>
    );
}