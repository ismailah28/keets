import {
  Accordion,
  AccordionPanel,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
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

export default function Sidebar() {
  return (
    <Flex
      as='nav'
      pos='sticky'
      top='0'
      left='0'
      w='250px'
      minH='100vh'
      h='100%'
      bg='#32CD32'
      bgGradient='linear-gradient(to-br, #56ab2f, #a8e063)'
      flexDir='column'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
    >
      <Flex mt='32px' ml={4} align='center'>
        <Image src='/logo.svg' alt='logo' boxSize='30px' />
        <Text
          fontSize={30}
          ml={2}
          fontWeight='bold'
          wordBreak='normal'
          color='gray.600'
        >
          KEETS
        </Text>
      </Flex>
      <Stack mt={8}>
        <Accordion allowToggle border='none' alignItems='start'>
          <Stack mt={42} spacing='24px'>
            <NavItem icon={FiGrid} text='Dashboard' />
            <NavItem icon={FiHash} text='NERC Coding' />
            <NavItem icon={FiCpu} text='Transformers'>
              <AccordionPanel pb={0}>
                <Stack spacing={2} pl={5}>
                  <NavSubItem to='#' text='Load Reading' />
                  <NavSubItem to='#' text='Fault Report' />
                  <NavSubItem to='#' text='Vandalization Report' />
                  <NavSubItem to='#' text='Repair Report' />
                </Stack>
              </AccordionPanel>
            </NavItem>
            <NavItem icon={FiBox} text='Projects'>
              <AccordionPanel pb={0}>
                <Stack spacing={2} pl={5}>
                  <NavSubItem to='#' text='Commissioned' />
                  <NavSubItem to='#' text='First Approvals' />
                </Stack>
              </AccordionPanel>
            </NavItem>
            <NavItem icon={FiZapOff} text='Forced Outage'>
              <AccordionPanel pb={0}>
                <Stack spacing={2} pl={5}>
                  <NavSubItem to='#' text='33KV Forced Outage' />
                  <NavSubItem to='#' text='11KV Forced Outage' />
                </Stack>
              </AccordionPanel>
            </NavItem>
            <NavItem icon={FiDownloadCloud} text='Downloads' />
            <NavItem icon={FiSettings} text='Settings' />
          </Stack>
        </Accordion>
      </Stack>
      <Flex></Flex>
    </Flex>
  );
}
