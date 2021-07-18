import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FiBox,
  FiCpu,
  FiDownloadCloud,
  FiGrid,
  FiHash,
  FiSettings,
  FiZapOff,
} from "react-icons/fi";
import { NavItem, NavSubItem } from "./NavItem";

export default function Sidebar({ sidebarSize, resizeSidebar }) {
  return (
    <Flex
      as='nav'
      pos='sticky'
      top='0'
      left='0'
      w={sidebarSize == "small" ? "75px" : "300px"}
      minH='100vh'
      h='100%'
      // bg='#32CD32'
      // bgGradient='linear-gradient(to-br, #56ab2f, #a8e063)'
      flexDir='column'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      zIndex='sticky'
    >
      <Box
        pos='absolute'
        right='-32px'
        bg='#56ab2f'
        p={2}
        cursor='pointer'
        onClick={() => {
          resizeSidebar();
        }}
      >
        {sidebarSize == "small" ? (
          <ChevronRightIcon />
        ) : (
          <ChevronLeftIcon fontSize='md' />
        )}
      </Box>
      <Flex mt='32px' ml={6} align='center'>
        <Image src='/logo.svg' alt='logo' boxSize={30} />
        {sidebarSize == "large" && (
          <Text fontSize={30} ml={4} fontWeight='bold' color='gray.600'>
            KEETS
          </Text>
        )}
      </Flex>
      <Stack mt={8} pl={2}>
        <Accordion allowToggle border='none' alignItems='start'>
          <Stack mt={42} spacing='24px'>
            <NavItem icon={FiGrid} text='Dashboard' sidebarSize={sidebarSize} />
            <NavItem
              icon={FiHash}
              text='NERC Coding'
              sidebarSize={sidebarSize}
            />
            <NavItem icon={FiCpu} text='Transformers' sidebarSize={sidebarSize}>
              <AccordionPanel pb={0}>
                <Stack spacing={2} pl={5}>
                  <NavSubItem to='#' text='Load Reading' />
                  <NavSubItem to='#' text='Fault Report' />
                  <NavSubItem to='#' text='Vandalization Report' />
                  <NavSubItem to='#' text='Repair Report' />
                </Stack>
              </AccordionPanel>
            </NavItem>
            <NavItem icon={FiBox} text='Projects' sidebarSize={sidebarSize}>
              <AccordionPanel pb={0}>
                <Stack spacing={2} pl={5}>
                  <NavSubItem to='#' text='Commissioned' />
                  <NavSubItem to='#' text='First Approvals' />
                </Stack>
              </AccordionPanel>
            </NavItem>
            <NavItem
              icon={FiZapOff}
              text='Forced Outage'
              sidebarSize={sidebarSize}
            >
              <AccordionPanel pb={0}>
                <Stack spacing={2} pl={5}>
                  <NavSubItem to='#' text='33KV Forced Outage' />
                  <NavSubItem to='#' text='11KV Forced Outage' />
                </Stack>
              </AccordionPanel>
            </NavItem>
            <NavItem
              icon={FiDownloadCloud}
              text='Downloads'
              sidebarSize={sidebarSize}
            />
            <NavItem
              icon={FiSettings}
              text='Settings'
              sidebarSize={sidebarSize}
            />
          </Stack>
        </Accordion>
      </Stack>
    </Flex>
  );
}
