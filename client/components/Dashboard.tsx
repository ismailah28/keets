import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <Flex w='100%'>
      <Sidebar />
      <Flex w='' flexDir='column'>
        <Header />
      </Flex>
    </Flex>
  );
}
