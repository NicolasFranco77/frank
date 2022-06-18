import type { NextPage } from "next";

//components
import Navbar from "../src/components/Navbar/Navbar";
import Carousel from "../src/components/Carousel/Carousel.tsx";

import { Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
    </>
  );
};

export default Home;
