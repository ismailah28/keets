import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const [sidebarSize, setSidebarSize] = useState("large");
  const resizeSidebar = () => {
    sidebarSize == "large" ? setSidebarSize("small") : setSidebarSize("large");
  };
  return (
    <Flex w='100%'>
      <Sidebar sidebarSize={sidebarSize} resizeSidebar={resizeSidebar} />
      <Flex w='100%' flexDir='column'>
        <Header />
      </Flex>
    </Flex>
  );
}
