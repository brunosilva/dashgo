// libs
import React from 'react'
import { Flex } from '@chakra-ui/react'

// Components
import { Search } from './Search'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'

export function Header(){
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
        >
            <Logo />

            <Search />

        <Flex
            align="center"
            ml="auto"
        >
            <Notifications />

            <Profile />
            
        </Flex>
            
        </Flex>
    )
}