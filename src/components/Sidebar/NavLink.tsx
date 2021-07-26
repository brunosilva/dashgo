import { ElementType } from "react";
import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

// get 'extends' from 'LinkProps' on import and send spredOperators (...rest)
// LinkProps -> all properties of Link
interface NavLinkProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps){
    return(
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}