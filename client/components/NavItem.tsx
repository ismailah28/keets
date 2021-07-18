import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Flex,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { ReactNode } from "react";

interface INavItems {
  children?: ReactNode;
  text: string;
  icon: IconType;
  to?: string;
  sidebarSize?: string;
}

export const NavItem = ({
  children,
  icon,
  text,
  to,
  sidebarSize,
  ...props
}: INavItems) => {
  return (
    <Flex align='center' justify='flex-start' cursor='pointer'>
      <AccordionItem w='100%' border='none'>
        <Link href={to && `${to}`} _hover={{ textDecor: "none" }}>
          <AccordionButton display='flex' justifyContent='space-between'>
            <Flex align='center' justify='center'>
              <Icon as={icon} fontSize='20px' color='gray.600' />

              {sidebarSize == "large" && (
                <Text
                  ml='8px'
                  fontWeight='normal'
                  fontSize='16px'
                  color='gray.600'
                  noOfLines={1}
                >
                  {text}
                </Text>
              )}
            </Flex>
            {children && sidebarSize == "large" && <AccordionIcon />}
          </AccordionButton>
        </Link>
        {children}
      </AccordionItem>
    </Flex>
  );
};

interface IProps {
  text: string;
  to: string;
}

export const NavSubItem = ({ text, to }: IProps) => (
  <Link
    display='inline-block'
    w='100%'
    href={to}
    p={2}
    color='white'
    fontWeight='light'
    _hover={{ textDecor: "none", background: "rgba(0, 0, 0, 0.1)" }}
  >
    <Text w='100%' fontWeight='normal' noOfLines={1} color='gray.600'>
      {text}
    </Text>
  </Link>
);
