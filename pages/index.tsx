import type { NextPage } from "next";

//components
import Carousel from "../src/components/Carousel/Carousel";
import ProductsList from "../src/components/Products/ProductsList";
import Footer from "../src/components/Footer/Footer";

import { Grid, GridItem } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <Grid templateColumns="15%  85%" py={10}>
        <GridItem ml={3} mr={3} border={"1px"}></GridItem>
        <GridItem>
          <ProductsList />
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

export default Home;
