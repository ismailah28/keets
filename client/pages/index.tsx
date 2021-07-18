import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <Flex>
      <Head>
        <title>KEETS Board</title>
      </Head>

      <Dashboard />
    </Flex>
  );
}
