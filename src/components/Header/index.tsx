// libs
import React from 'react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'

// Components
import { Search } from './Search'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'

export function Header(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

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

            { isWideVersion && <Search /> }

        <Flex
            align="center"
            ml="auto"
        >
            <Notifications />

            <Profile showProfileData={isWideVersion} />
            
        </Flex>
            
        </Flex>
    )
}