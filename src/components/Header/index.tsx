// libs
import React from 'react'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

// Components
import { Search } from './Search'
import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header(){
    const { onOpen } = useSidebarDrawer();

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

            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    alignSelf="center"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}
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